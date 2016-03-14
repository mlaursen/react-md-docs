import { OPEN_DRAWER, CLOSE_DRAWER, UPDATE_TITLE, UPDATE_THEME } from '../constants/ActionTypes';

export function openDrawer() {
  return { type: OPEN_DRAWER };
}

export function closeDrawer() {
  return { type: CLOSE_DRAWER };
}

export function updateTitle(route) {
  return {
    type: UPDATE_TITLE,
    route,
  };
}

export function updateTheme(theme) {
  return {
    type: UPDATE_THEME,
    theme,
  };
}
