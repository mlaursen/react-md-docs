import { OPEN_DOC_DIALOG, CLOSE_DOC_DIALOG } from '../constants/ActionTypes';
import { SIMPLE, MODAL, FULL_PAGE } from '../constants/dialogs';

const initialState = {
  [`${SIMPLE}Open`]: false,
  [`${MODAL}Open`]: false,
  [`${FULL_PAGE}Open`]: false,
};

function updateDialogOpen(state, { name, event }, isOpen) {
  if(state[`${name}Open`] === isOpen) { return state; }

  const nextState = { [`${name}Open`]: isOpen };

  if(name === FULL_PAGE && isOpen) {
    state[`${name}PageX`] = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
    state[`${name}PageY`] = event.changedTouches ? event.changedTouches[0].pageY : event.pageY;
  }

  return Object.assign({}, state, nextState);
}


export default function dialogs(state = initialState, action) {
  switch(action.type) {
    case OPEN_DOC_DIALOG:
      return updateDialogOpen(state, action, true);
    case CLOSE_DOC_DIALOG:
      return updateDialogOpen(state, action, false);
    default:
      return state;
  }
}
