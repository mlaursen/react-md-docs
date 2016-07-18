export function capitalizeFirst(s) {
  return s.charAt(0).toUpperCase() + s.substring(1, s.length);
}

function reduce(s, split, joiner, fn) {
  const reduced = (Array.isArray(s) ? s : s.split(split)).reduce((prev, curr) => {
    if(prev) {
      prev += joiner;
    }

    curr = fn(curr);
    return prev ? prev + curr : curr;
  });

  return fn(reduced);
}

export const toTitle = s => reduce(s, '-', ' ', capitalizeFirst);
export const toClassName = s => reduce(s, ' ', '-', s => s.toLowerCase());
export const toPageName = s => reduce(s, '-', '', capitalizeFirst);
export const tab = (amount = 1) => ' '.repeat(amount);

/**
 * Converts a path string or a full component name into a prop-type id to use
 * in the routes fuse.
 *
 * @param {String} s the string to convert
 * @return {String} a string to use for an id tag or the routes fuse search.
 */
export function toPropTypeId(s) {
  if(s.indexOf('/') !== -1) {
    s = s.replace('/components/', '')
      .split('/')
      .reduce((prev, curr) => capitalizeFirst(curr) + prev, '');
  }

  let id = s.split(/(?=[A-Z])/)
    .map(s => s.toLowerCase())
    .join('-')
    .replace(/ /g, '')
    .replace('-selection-controls', '');

  let endIndex = id.length;
  if(id.substring(id.length - 2, id.length) === 'es' && id !== 'data-tables' && id !== 'autocompletes') {
    endIndex = id.length - 2;
  } else if(id !== 'tabs' && id.charAt(id.length - 1) === 's' && id.charAt(id.length - 2) !== 's') {
    endIndex = id.length - 1;
  }

  return id.substring(0, endIndex);
}

/*eslint-disable no-use-before-define*/

function getOneOfPropType(value, tabs) {
  const l = value.length - 1;
  const values = tab(tabs) + value.reduce((prev, curr, i) => {
    const v = prev + curr.value;
    return v + (i < l ? ',\n' + tab(tabs) : '');
  }, '');

  return `oneOf([\n${values}\n])`;
}

function getOneOfTypePropType(value, tabs) {
  const l = value.length - 1;
  const values = value.reduce((prev, curr, i) => {
    const v = prev + getPropTypeString(curr, tabs + 1);
    return v + (i < l ? ',\n' + tab(tabs) : '');
  }, '\n' + tab(tabs)) + '\n' + tab(tabs - 1);

  return `oneOfType([${values}])`;
}

function getShapePropType(value, tabs) {
  const keys = Object.keys(value);
  const l = keys.length - 1;
  const values = keys.reduce((prev, key, i) => {
    const v = prev + key + ': ' + getPropTypeString(value[key], tabs + 1);
    return v + (i < l ? ',\n' + tab(tabs) : '');
  }, '\n' + tab(tabs)) + '\n' + tab(tabs - 1);

  return `shape({${values}})`;
}

function getComputedPropType(name, value) {
  const computed = eval(value);
  switch(name) {
    case 'enum':
      return getOneOfPropType(computed.map(v => ({ value: `'${v}'` })));
    default:
      return computed;
  }
}

/**
 * Converts a docgen prop type into a string.
 *
 * @param {Object} docgen The docgen object.
 * @param {Number} tabs? The current number of tabs.
 * @return {String} a formatted markdown string to represent the prop type.
 */
export function getPropTypeString({ name, value, computed }, tabs = 0) {
  if(computed) {
    return getComputedPropType(name, value);
  }

  switch(name) {
    case 'union':
      return getOneOfTypePropType(value, tabs + 1);
    case 'arrayOf':
      return `${name}(${getPropTypeString(value, tabs + 1)})`;
    case 'enum':
      return getOneOfPropType(value, tabs + 1);
    case 'shape':
      return getShapePropType(value, tabs + 1);
    case 'instanceOf':
      return `${name}(${value})`;
    default:
      return name;
  }
}

function extractNestedPropTypeDescriptions({ name, value, description, computed }, propName, descriptions) {
  switch(name) {
    case 'shape':
      Object.keys(value).forEach(key => {
        extractNestedPropTypeDescriptions(value[key], key, descriptions);
      });
      break;
    case 'union':
      value.forEach(value => extractNestedPropTypeDescriptions(value, propName, descriptions));
      break;
    case 'arrayOf':
    case 'enum':
      extractNestedPropTypeDescriptions(value, propName, descriptions);
      break;
    default:
  }

  if(propName && description) {
    descriptions.push({
      propName,
      description,
    });
  }

  return descriptions;
}

/**
 * Takes a docgen propType and attempts to find any nested descriptions of a prop.
 * This really only happens when there is a nested shape at this time.
 *
 * @param {Object} propType The docgen propType.
 * @param {String} propName The initial propName.
 * @return {String} a markdown string to use.
 */
export function getAdditionalPropTypeDescriptions(propType, propName) {
  const descriptions = extractNestedPropTypeDescriptions(propType, propName, []);
  if(!descriptions.length) {
    return '';
  }

  return descriptions.reduce((prev, { propName, description }) => {
    return prev + `\`${propName}\`: ${description}\n\n`;
  }, '\n\n');
}
