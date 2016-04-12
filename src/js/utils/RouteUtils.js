import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'react-router';

import { toTitle } from './StringUtils';
import { flatten } from './index';

import sassIcon from '../../imgs/sass-icon.png';
const reactLogo = 'https://facebook.github.io/react/img/logo.svg';
const googleLogo = 'https://i.ytimg.com/vi/PAKCgvprpQ8/maxresdefault.jpg';

function mapNestedRoutes(component, base, prefix = '') {
  let realPath, options, realNestedItems;
  if(typeof component === 'string') {
    realPath = component;
    options = {};
  } else {
    const { path, nestedItems, ...remaining } = component;
    realPath = path;
    realNestedItems = nestedItems;
    options = remaining;
  }

  if(prefix) {
    prefix += '/';
  }

  return {
    ...options,
    nestedItems: realNestedItems && realNestedItems.map(c => mapNestedRoutes(c, base, realPath)),
    path: `${base}/${prefix}${realPath}`,
    primaryText: toTitle(realPath),
  };
}

const components = [
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
].map(c => mapNestedRoutes(c, 'components'));
export const FIRST_COMPONENT_LINK = components[0].path;

function mapItemsToNavParts({ component, icon, avatarProps, path, nestedItems, primaryText, ...props }, pathname) {
  if(props.divider) {
    return props;
  } else if(props.subheader) {
    return {
      ...props,
      subheader: true,
      primaryText,
    };
  }

  let left;
  if(icon) {
    left = <FontIcon>{icon}</FontIcon>;
  } else if(avatarProps) {
    left = <Avatar {...avatarProps} className="fake-icon" />;
  }

  const to = '/' + path;
  let componentToUse;
  if(component) {
    componentToUse = component;
  } else if(props.href) {
    componentToUse = 'a';
  } else if(!nestedItems) {
    componentToUse = Link;
  }

  const isHome = path === '';
  const isHomeActive = isHome && pathname === '/';
  const isSubsActive = !isHome && pathname.indexOf(path) !== -1;
  const isCompActive = primaryText === 'Components' && pathname.indexOf('components') !== -1;
  // can't use activeClassName since it doesn't update correctly with PureRenderMixin
  const className = isHomeActive || isSubsActive || isCompActive ? 'active' : null;

  return {
    ...props,
    to,
    className,
    component: componentToUse,
    nestedItems: nestedItems && nestedItems.map(c => mapItemsToNavParts(c, pathname)),
    leftIcon: left,
    primaryText: primaryText || toTitle(path),
    initiallyOpen: nestedItems && className === 'active',
  };
}

const navItems = [{
  path: '',
  icon: 'home',
  primaryText: 'Home',
}, {
  path: 'getting-started',
  icon: 'info_outline',
  nestedItems: [
    'prerequisites',
    'installation',
  ].map(p => mapNestedRoutes(p, 'getting-started')),
}, {
  path: 'customization',
  icon: 'color_lens',
  nestedItems: [
    'colors',
    'themes',
    'typography',
  ].map(item => mapNestedRoutes(item, 'customization')),
}, {
  path: 'typography',
  icon: 'text_fields',
}, {
  href: '/sassdoc',
  avatarProps: { src: sassIcon, alt: 'SASS icon' },
  primaryText: 'SASS Doc',
}, {
  icon: 'build',
  primaryText: 'Components',
  nestedItems: components,
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
}];

export function getNavItems(pathname) {
  return navItems.map(opts => mapItemsToNavParts(opts, pathname));
}

function extractRouteData({ nestedItems, ...data }) {
  if(nestedItems) {
    return nestedItems.map(extractRouteData);
  }

  let searchName = data.primaryText;
  if((data.href || data.to).match(/.*components\/.*\/.*$/g)) {
    const to = data.to.replace('/components/', '');
    if(to.indexOf('selection-controls') !== -1) {
      searchName = toTitle(to.replace('selection-controls/', ''));
    } else {
      searchName = toTitle(to.split('/').reverse());
    }
  }

  return {
    ...data,
    key: data.href || data.to,
    primaryText: searchName,
  };
}

export const routeData = flatten(getNavItems('').filter(item => !item.divider && !item.subheader).map(extractRouteData));

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
