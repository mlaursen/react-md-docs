import { OPEN_DRAWER, CLOSE_DRAWER } from '../constants/ActionTypes';

function updateDrawer(state, isOpen) {
  if(state.isDrawerOpen !== isOpen) {
    return Object.assign({}, state, { isDrawerOpen: isOpen });
  }

  return state;
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
    default: return state;
  }
}
