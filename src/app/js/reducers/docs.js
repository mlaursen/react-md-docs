import { DISMISS_TOAST, ADD_TOAST } from '../constants/ActionTypes';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: (code, lang) => require('highlight.js').highlight(lang, code).value, // eslint-disable-line no-undef
});

const initialState = {
  marked,
  toasts: [],
};

function addToast(state, { toast }) {
  if(!toast) { return state; }

  const toasts = state.toasts.concat([toast]);
  return Object.assign({}, state, { toasts });
}

function dismissToast(state) {
  if(!state.toasts.length) { return state; }

  const toasts = state.toasts.slice();
  toasts.shift();

  return Object.assign({}, state, { toasts });
}

export default function docs(state = initialState, action) {
  switch(action.type) {
    case ADD_TOAST:
      return addToast(state, action);
    case DISMISS_TOAST:
      return dismissToast(state);
    default:
      return state;
  }
}
