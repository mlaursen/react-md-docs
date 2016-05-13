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

/*eslint-disable no-use-before-define*/

function getOneOfPropType(value, tabs) {
  const values = tab(tabs) + value.reduce((prev, curr) => {
    return prev + curr.value + ',\n' + tab(tabs);
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
    default:
      return name;
  }
}
