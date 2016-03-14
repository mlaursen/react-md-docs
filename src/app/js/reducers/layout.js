import { OPEN_DRAWER, CLOSE_DRAWER, UPDATE_TITLE_THEME } from '../constants/ActionTypes';
import { APP_URI_BASE } from '../utils';
import { toTitle } from '../utils/StringUtils';

function updateDrawer(state, isOpen) {
  if(state.isDrawerOpen !== isOpen) {
    return Object.assign({}, state, { isDrawerOpen: isOpen });
  }

  return state;
}

function updateLayoutTitleTheme(state, route) {
  const path = route.replace(APP_URI_BASE + '/', '');
  const isComponents = path.indexOf('components') !== -1;

  const title = isComponents ? 'Components' : toTitle(path);
  const theme = isComponents || '' === path ? null : `theme-${path}`;

  if(state.title === title) {
    return state;
  }

  return Object.assign({}, state, { title, theme });
}

const initialState = {
  isDrawerOpen: false,
};

export default function layout(state = initialState, action) {
  switch(action.type) {
    case OPEN_DRAWER:
      return updateDrawer(state, true);
    case CLOSE_DRAWER:
      return updateDrawer(state, false);
    case UPDATE_TITLE_THEME:
      return updateLayoutTitleTheme(state, action.route);
    default: return state;
  }
}
