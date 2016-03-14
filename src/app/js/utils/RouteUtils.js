import React from 'react';
import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import { Link } from 'react-router';

import { toTitle } from './StringUtils';
import { APP_URI_BASE } from './index';

import sassIcon from '../../imgs/sass-icon.png';
const reactLogo = 'https://facebook.github.io/react/img/logo.svg';
const googleLogo = 'https://i.ytimg.com/vi/PAKCgvprpQ8/maxresdefault.jpg';

function mapComponentRoutes(component, prefix = '') {
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
    nestedItems: realNestedItems && realNestedItems.map(c => mapComponentRoutes(c, realPath)),
    path: `components/${prefix}${realPath}`,
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
  'dialogs',
  'dividers',
  'font-icons',
  'lists',
  'menus',
  'navigation-drawers',
  'papers', {
    path: 'pickers',
    nestedItems: ['date', 'time'],
  }, {
    path: 'progress',
    nestedItems: ['linear', 'circuluar'],
  }, {
    path: 'selection-controls',
    nestedItems: ['checkboxes', 'radios', 'switches'],
  },
  'select-fields',
  'sliders',
  'snackbars',
  'tabs',
  'text-fields',
  'toolbars',
  'tooltips',
].map(c => mapComponentRoutes(c));

function mapItemsToNavParts({ component, icon, avatarProps, path, nestedItems, primaryText, ...props }, pathname) {
  if(props.subheader || props.divider) {
    return props;
  }

  let left;
  if(icon) {
    left = <FontIcon>{icon}</FontIcon>;
  } else if(avatarProps) {
    left = <Avatar {...avatarProps} className="fake-icon" />;
  }

  const to = `${APP_URI_BASE}/${path}`;
  let componentToUse;
  if(component) {
    componentToUse = component;
  } else if(props.href) {
    componentToUse = 'a';
  } else if(!nestedItems) {
    componentToUse = Link;
  }

  const isHome = path === '';
  const isHomeActive = isHome && pathname === `${APP_URI_BASE}/`;
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
  };
}

const navItems = [{
  path: '',
  icon: 'home',
  primaryText: 'Home',
}, {
  path: 'getting-started',
  icon: 'info_outline',
}, {
  path: 'customization',
  icon: 'color_lens',
}, {
  path: 'typography',
  icon: 'text_fields',
}, {
  href: `${APP_URI_BASE}/sassdoc`,
  avatarProps: { src: sassIcon, alt: 'SASS icon' },
  primaryText: 'SASS Doc',
}, {
  icon: 'build',
  primaryText: 'Components',
  nestedItems: components,
}, { divider: true }, {
  href: 'https://facebook.github.io/react/',
  avatarProps: { src: reactLogo, alt: 'React Logo' },
  primaryText: 'React',
}, {
  href: 'https://www.google.com/design/spec/material-design/introduction.html',
  avatarProps: { src: googleLogo, alt: 'Google Logo' },
  primaryText: 'Material Design',
}, {
  href: 'https://design.google.com/icons/',
  avatarProps: { src: googleLogo, alt: 'Google Logo' },
  primaryText: 'Material Icons',
}];

export function getNavItems(pathname) {
  return navItems.map(opts => mapItemsToNavParts(opts, pathname));
}
