import { DISMISS_TOAST, ADD_TOAST, SEARCH_FOR_COMPONENT, START_QUICK_SEARCHING, STOP_QUICK_SEARCHING } from '../constants/ActionTypes';
import marked from 'marked';
import Fuse from 'fuse.js';

import { routeData } from '../utils/RouteUtils';

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

const fuse = new Fuse(routeData, {
  keys: [{
    name: 'to',
    weight: 0.35,
  }, {
    name: 'href',
    weight: 0.35,
  }, {
    name: 'searchName',
    weight: 0.2,
  }, {
    name: 'primaryText',
    weight: 0.1,
  }],
});

const initialState = {
  marked,
  toasts: [],
  matches: [],
  isQuickSearching: false,
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

function searchForComponent(state, query) {
  if(!query && state.matches.length === 0) {
    return state;
  }

  return Object.assign({}, state, { matches: fuse.search(query) });
}

function toggleSwitchSearching(state, isQuickSearching) {
  if(state.isQuickSearching === isQuickSearching) {
    return state;
  }
  return Object.assign({}, state, { isQuickSearching });
}

export default function docs(state = initialState, action) {
  switch(action.type) {
    case ADD_TOAST:
      return addToast(state, action);
    case DISMISS_TOAST:
      return dismissToast(state);
    case SEARCH_FOR_COMPONENT:
      return searchForComponent(state, action.query);
    case START_QUICK_SEARCHING:
      return toggleSwitchSearching(state, true);
    case STOP_QUICK_SEARCHING:
      return toggleSwitchSearching(state, false);
    default:
      return state;
  }
}
