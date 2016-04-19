import {
  UI_OPEN_DRAWER,
  UI_CLOSE_DRAWER,
  UI_UPDATE_TITLE,
  UI_UPDATE_THEME,
  UI_UPDATE_DRAWER_TYPE,
  UI_SHOW_OVERLAY,
  UI_HIDE_OVERLAY,
} from '../constants/ActionTypes';

export function openDrawer() {
  return { type: UI_OPEN_DRAWER };
}

export function closeDrawer() {
  return { type: UI_CLOSE_DRAWER };
}

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
