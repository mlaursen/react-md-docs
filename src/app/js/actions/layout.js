import { OPEN_DRAWER, CLOSE_DRAWER, UPDATE_TITLE_THEME } from '../constants/ActionTypes';

export function openDrawer() {
  return { type: OPEN_DRAWER };
}

export function closeDrawer() {
  return { type: CLOSE_DRAWER };
}

export function updateLayoutTitleTheme(route) {
  return {
    type: UPDATE_TITLE_THEME,
    route,
  };
}
