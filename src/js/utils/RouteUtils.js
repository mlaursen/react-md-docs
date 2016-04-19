/*eslint-env node*/
if(typeof require.ensure !== 'function') {
  require.ensure = (d, c) => c(require);
}

import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'react-router';

import { toTitle, toPageName } from './StringUtils';
import { flatten } from './index';

const reactLogo = 'https://facebook.github.io/react/img/logo.svg';
const googleLogo = 'https://i.ytimg.com/vi/PAKCgvprpQ8/maxresdefault.jpg';

function mapToNavItems(route, parents = []) {
  const prefix = (parents.length ? '/' + parents.join('/') : '') + '/';
  if(typeof route === 'string') {
    return {
      component: Link,
      to: `${prefix}${route}`,
      primaryText: toTitle(route),
    };
  }

  const { divider, subheader, path, primaryText, icon, avatarProps, nestedItems, component, ...props } = route;
  if(divider) {
    return { divider, ...props };
  } else if(subheader) {
    return {
      primaryText,
      subheader,
      ...props,
    };
  }

  let resolvedNestedItems, resolvedIcon, resolvedAvatar, resolvedComponent;
  if(nestedItems) {
    resolvedNestedItems = nestedItems.map(route => mapToNavItems(route, parents.length ? [...parents, path] : [path]));
  }

  if(icon) {
    resolvedIcon = <FontIcon>{icon}</FontIcon>;
  }

  if(avatarProps) {
    resolvedAvatar = <Avatar {...avatarProps} className="fake-icon" />;
  }

  if(component) {
    resolvedComponent = component;
  } else if(props.href) {
    resolvedComponent = 'a';
  } else if(!nestedItems) {
    resolvedComponent = Link;
  }

  let to;
  if(typeof path !== 'undefined' && !nestedItems) {
    to = `${prefix}${path}`;
  }

  return {
    ...props,
    to,
    component: resolvedComponent,
    leftIcon: resolvedIcon,
    leftAvatar: resolvedAvatar,
    nestedItems: resolvedNestedItems,
    primaryText: primaryText || toTitle(path),
  };
}


export const FIRST_COMPONENT_LINK = 'components/avatars';
export const routes = [{
  path: '',
  primaryText: 'Home',
  icon: 'home',
}, {
  path: 'getting-started',
  icon: 'info_outline',
  nestedItems: ['prerequisites', 'installation'],
}, {
  path: 'customization',
  icon: 'color_lens',
  nestedItems: [
    'colors',
    'themes',
    'media-queries',
    'typography', {
      href: '/sassdoc',
      primaryText: 'SASS Doc',
    },
  ],
}, {
  path: 'discover-more',
  icon: 'search',
  nestedItems: ['community', 'contributing'],
}, {
  icon: 'build',
  path: 'components',
  nestedItems: [
    'avatars', {
      path: 'buttons',
      nestedItems: ['flat', 'raised', 'floating', 'icon'],
    },
    'cards',
    'chips',
    'data-tables',
    'dialogs',
    'dividers',
    'font-icons',
    'lists',
    'inks',
    'menus',
    'navigation-drawers',
    'papers', {
      path: 'pickers',
      nestedItems: ['date', 'time'],
    }, {
      path: 'progress',
      nestedItems: ['circular', 'linear'],
    }, 'select-fields', {
      path: 'selection-controls',
      nestedItems: ['checkboxes', 'radios', 'switches'],
    },
    'sidebars',
    'sliders',
    'snackbars',
    'tabs',
    'text-fields',
    'toolbars',
    'tooltips',
  ],
}, { divider: true }, {
  subheader: true,
  primaryText: 'References',
}, {
  href: 'https://facebook.github.io/react/',
  avatarProps: { src: reactLogo, alt: 'React Logo' },
  primaryText: 'React',
  target: '_blank',
}, {
  href: 'https://www.google.com/design/spec/material-design/introduction.html',
  avatarProps: { src: googleLogo, alt: 'Google Logo' },
  primaryText: 'Material Design',
  target: '_blank',
}, {
  href: 'https://design.google.com/icons/',
  avatarProps: { src: googleLogo, alt: 'Google Logo' },
  primaryText: 'Material Icons',
  target: '_blank',
}].map(route => mapToNavItems(route));

/**
 * Checks if any of the nested items are currently active.
 *
 * @param {array} nestedItems the nested items to compare
 * @param {string} pathname the current pathname to compare to
 * @return true if one of the nested items are active.
 */
function isNestedItemActive(nestedItems, pathname) {
  if(!nestedItems) { return false; }

  return nestedItems.some(({ to, nestedItems }) => isNestedItemActive(nestedItems, pathname) || to === pathname);
}

/**
 * Checks if a given route is active by comparing to the given pathname.
 * A route is active if one of the nested items are equal to the pathname
 * or the current route equals the pathname.
 *
 * @param {Object} route the current route properties to check against
 * @param {string} pathname the current pathname to compare against.
 * @return a route poperties object
 */
function updateActiveRoutes(route, pathname) {
  if(route.divider || route.subheader) {
    return route;
  }

  const { to, nestedItems, ...props } = route;
  const isActive = to === pathname || isNestedItemActive(nestedItems, pathname);
  return {
    ...props,
    to,
    initiallyOpen: nestedItems && isActive,
    nestedItems: nestedItems && nestedItems.map(route => updateActiveRoutes(route, pathname)),
    tileClassName: isActive ? 'active' : null,
  };
}

/**
 * Gets all the routes as navigation items. This will be all the routes
 * with the correct component and any additional props needed to display
 * in the navigation drawer.
 *
 * It will also update the active className and if the item is currently
 * open if it contains nested items.
 *
 * @param {string} pathname? the pathname to compare against. Defaults to
 *    the empty string if omitted.
 * @return an array or ListItem props for the Navigation Drawer.
 */
export function getNavItems(pathname = '') {
  return !pathname || pathname === '' ? routes : routes.map(route => updateActiveRoutes(route, pathname));
}

/**
 * Extracts a route's to parameter. If it includes nested items, it returns
 * the nested item's routes instead.
 *
 * @param {Object} route the route to extract data from
 * @return the path or a list of paths.
 */
function extractRoute(route) {
  if(route.nestedItems) {
    return route.nestedItems.map(extractRoute);
  } else {
    return route.to;
  }
}

let validRoutes;
/**
 * Initializes the validRoutes variable.
 */
function initializeValidRoutes() {
  validRoutes = flatten(routes.map(extractRoute)).filter(route => route && route !== '/');
}

/**
 * Extracts the page name from the current pathname to convert
 * to a component.
 *
 * @param {String} pathname the current pathname.
 * @return a path to a component.
 */
function extractPageName(pathname) {
  if(validRoutes.indexOf(pathname) === -1) {
    return '/NotFound';
  } else if(pathname.indexOf('components') === -1) {
    const i = pathname.lastIndexOf('/') + 1;
    const section = pathname.substring(i, pathname.length);
    return pathname.substring(0, i) + toPageName(section);
  }

  const base = pathname.replace('/components', '');
  const parts = base.split('/').filter(p => !!p).reverse();

  let section = toPageName(toPageName(parts).split('-'));

  // Strip last 's' if not progress
  if(pathname.indexOf('progress') === -1) {
    section = section.substring(0, section.length - 1);
  }
  section = section + 'Docs';

  return base + '/' + section.replace(/e?sSelectionControl/, '');
}

/**
 * A function to get the component for a route. Semi-lazy loading.
 *
 * @param {Object} location the current location object.
 * @param {Function} cb the callback function to call to get the component.
 */
export function getComponent(location, cb) {
  if(!validRoutes) {
    initializeValidRoutes();
  }

  const { pathname } = location;
  require.ensure([], require => {
    const component = require('../components' + extractPageName(pathname)).default;
    cb(null, component);
  });
}

// When webpack 2.x.x is released
//
// export function getComponent(location, cb) {
//   System.import('../' + location.pathname.replace('/', ''))
//     .then(() => {
//       return module => cb(null, module.default);
//     })
//     .catch(err => {
//       console.error('Dynamic page loading failed', err);
//     });
// }
