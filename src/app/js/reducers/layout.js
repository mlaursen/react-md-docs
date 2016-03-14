import { OPEN_DRAWER, CLOSE_DRAWER, UPDATE_TITLE, UPDATE_THEME } from '../constants/ActionTypes';
import { APP_URI_BASE } from '../utils';
import { toTitle } from '../utils/StringUtils';
import themes from '../constants/themes';

function updateDrawer(state, isOpen) {
  if(state.isDrawerOpen !== isOpen) {
    return Object.assign({}, state, { isDrawerOpen: isOpen });
  }

  return state;
}

function updateTitle(state, route) {
  const path = route.replace(APP_URI_BASE + '/', '');
  const isComponents = path.indexOf('components') !== -1;

  const title = isComponents ? 'Components' : toTitle(path);

  if(state.title === title) {
    return state;
  }

  return Object.assign({}, state, { title });
}

function updateTheme(state, theme) {
  if(state.theme === theme) { return state; }

  if(typeof Storage !== 'undefined') {
    localStorage.setItem('theme', theme);
  }

  return Object.assign({}, state, { theme });
}

const initialState = {
  isDrawerOpen: false,
  theme: typeof Storage !== 'undefined' ? localStorage.getItem('theme') : themes[0],
};

export default function layout(state = initialState, action) {
  switch(action.type) {
    case OPEN_DRAWER:
      return updateDrawer(state, true);
    case CLOSE_DRAWER:
      return updateDrawer(state, false);
    case UPDATE_TITLE:
      return updateTitle(state, action.route);
    case UPDATE_THEME:
      return updateTheme(state, action.theme);
    default: return state;
  }
}
