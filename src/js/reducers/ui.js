import {
  UI_OPEN_DRAWER,
  UI_CLOSE_DRAWER,
  UI_UPDATE_TITLE,
  UI_UPDATE_THEME,
  UI_UPDATE_DRAWER_TYPE,
  UI_SHOW_OVERLAY,
  UI_HIDE_OVERLAY,
} from '../constants/ActionTypes';
import themes from '../constants/themes';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { toTitle, toPropTypeId } from '../utils/StringUtils';
import { routes } from '../utils/RouteUtils';
import { flatten } from '../utils';

function updateDrawer(state, isOpen) {
  if(state.isDrawerOpen !== isOpen) {
    return Object.assign({}, state, { isDrawerOpen: isOpen });
  }

  return state;
}

function updateTitle(state, pathname) {
  const path = pathname.replace('/', '');
  let title = 'Components';
  if(path.indexOf('components') === -1) {
    const split = path.split('/');
    title = toTitle(split[Math.max(0, split.length - 1)]);
  }

  if(state.title === title) {
    return state;
  } else {
    return Object.assign({}, state, { title });
  }
}

function updateTheme(state, theme) {
  if(state.theme === theme) { return state; }

  if(typeof Storage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }

  return Object.assign({}, state, { theme });
}

function updateDrawerType(state, drawerType) {
  if(state.drawerType === drawerType) { return state; }

  return Object.assign({}, state, { drawerType });
}

function updateOverlay(state, isOverlayVisible) {
  return state.isOverlayVisible === isOverlayVisible
    ? state
    : Object.assign({}, state, { isOverlayVisible });
}

let quickNavRoutes;
function extractRealRoutes(route) {
  if(route.nestedItems) {
    return route.nestedItems.map(extractRealRoutes);
  } else if(route.to && route.to !== '/') {
    let primaryText = route.primaryText;
    if(route.to.indexOf('components') !== -1) {
      primaryText = toTitle(toPropTypeId(route.to));
    }

    return {
      primaryText,
      to: route.to,
    };
  } else {
    return null;
  }
}

function updateQuickNavLinks(state, pathname) {
  if(!quickNavRoutes) {
    quickNavRoutes = flatten(routes.map(extractRealRoutes)).filter(r => !!r);
  }

  let i = 0;
  quickNavRoutes.some((r, index) => {
    if(r.to === pathname) {
      i = index;
      return true;
    }

    return false;
  });

  const previous = quickNavRoutes[i - 1] || {};
  const next = quickNavRoutes[i + 1] || {};
  const nextState = {
    previousTo: previous.to || null,
    previousName: previous.primaryText || null,
    nextTo: next.to || null,
    nextName: next.primaryText || null,
  };

  if(state.previousTo === nextState.previousTo) {
    return state;
  } else {
    return Object.assign({}, state, nextState);
  }
}

const initialState = {
  isDrawerOpen: false,
  theme: typeof Storage !== 'undefined' && localStorage.getItem('theme') || themes[1],
  drawerType: NavigationDrawer.DrawerType.FULL_HEIGHT,
  isOverlayVisible: false,
  isMobile: window.matchMedia('only screen and (max-width: 599px)').matches,
};

export default function ui(state = initialState, action) {
  switch(action.type) {
    case UI_OPEN_DRAWER:
      return updateDrawer(state, true);
    case UI_CLOSE_DRAWER:
      return updateDrawer(state, false);
    case UI_UPDATE_TITLE:
      return updateTitle(state, action.pathname);
    case UI_UPDATE_THEME:
      return updateTheme(state, action.theme);
    case UI_UPDATE_DRAWER_TYPE:
      return updateDrawerType(state, action.drawerType);
    case UI_SHOW_OVERLAY:
      return updateOverlay(state, true);
    case UI_HIDE_OVERLAY:
      return updateOverlay(state, false);
    case '@@router/LOCATION_CHANGE':
      // probably shouldn't it do it this way. Oh well
      return updateQuickNavLinks(state, action.payload.pathname);
    default:
      return state;
  }
}
