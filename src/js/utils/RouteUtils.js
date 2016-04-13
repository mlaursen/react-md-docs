import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'react-router';

import { toTitle } from './StringUtils';

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


export const FIRST_COMPONENT_LINK = '/components/avatars';
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
    'media-queries',
    'themes',
    'typography', {
      href: '/sassdoc',
      primaryText: 'SASS Doc',
    },
  ],
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

function getRouteClassName(route, pathname) {
  if(route.divider || route.subheader) {
    return route;
  }

  const { to, nestedItems, ...props } = route;
  return {
    ...props,
    to,
    nestedItems: nestedItems && nestedItems.map(route => getRouteClassName(route, pathname)),
    className: pathname === to ? 'active' : null,
  };
}

export function getNavItems(pathname = '') {
  return routes.map(route => getRouteClassName(route, pathname));
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
