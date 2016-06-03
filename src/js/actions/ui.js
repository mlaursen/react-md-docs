import {
  UI_UPDATE_TITLE,
  UI_UPDATE_THEME,
  UI_UPDATE_DRAWER_TYPE,
  UI_SHOW_OVERLAY,
  UI_HIDE_OVERLAY,
} from '../constants/ActionTypes';

export function updateTitle(pathname) {
  return {
    type: UI_UPDATE_TITLE,
    pathname,
  };
}

export function updateTheme(theme) {
  return {
    type: UI_UPDATE_THEME,
    theme,
  };
}

export function updateDrawerType(drawerType) {
  return {
    type: UI_UPDATE_DRAWER_TYPE,
    drawerType,
  };
}

export function showOverlay() {
  return { type: UI_SHOW_OVERLAY };
}

export function hideOverlay() {
  return { type: UI_HIDE_OVERLAY };
}
