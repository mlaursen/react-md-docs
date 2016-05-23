import {
  DISMISS_TOAST,
  ADD_TOAST,
  SEARCH_FOR_COMPONENT,
  START_QUICK_SEARCHING,
  STOP_QUICK_SEARCHING,
  INITIALIZE_COLORS,
} from '../constants/ActionTypes';
import marked from 'marked';
import Fuse from 'fuse.js';

import { getRoutesFuse } from '../utils/RouteUtils';

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
  colors: [],
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

let routesFuse;
function initializeRoutesFuse() {
  routesFuse = new Fuse(getRoutesFuse(), {
    keys: [{
      name: 'primaryText',
      weight: 0.95,
    }, {
      name: 'to',
      weight: 0.05,
    }],
  });
}

function searchForComponent(state, query) {
  if(!query && state.matches.length === 0) {
    return state;
  }

  // lazy load
  !routesFuse && initializeRoutesFuse();

  return Object.assign({}, state, { matches: routesFuse.search(query) });
}

function toggleSwitchSearching(state, isQuickSearching) {
  if(state.isQuickSearching === isQuickSearching) {
    return state;
  }
  return Object.assign({}, state, { isQuickSearching });
}

function initializeColors(state) {
  if(state.colors.length) { return state; }

  const primaries = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  const accents = [100, 200, 400, 700];
  const colors = [
    { color: 'red', p: 300, a: 100 },
    { color: 'pink', p: 200, a: 100 },
    { color: 'purple', p: 200, a: 100 },
    { color: 'deep-purple', p: 200, a: 100 },
    { color: 'indigo', p: 200, a: 100 },
    { color: 'blue', p: 400, a: 100 },
    { color: 'light-blue', p: 500, a: 400 },
    { color: 'cyan', p: 600 },
    { color: 'teal', p: 400 },
    { color: 'green', p: 500 },
    { color: 'light-green', p: 600 },
    { color: 'lime', p: 800 },
    { color: 'yellow' },
    { color: 'amber' },
    { color: 'orange', p: 700 },
    { color: 'deep-orange', p: 400, a: 200 },
    { color: 'brown', p: 200, a: null },
    { color: 'grey', p: 200, a: null },
    { color: 'blue-grey', p: 200, a: null },
  ].map(({ color, p, a }) => {
    return primaries.concat(a === null ? [] : accents).map((weight, i) => {
      const isAccent = i > primaries.length - 1;
      const name = `md-${color}-${isAccent ? 'a-' : ''}${weight}`;
      const comparator = isAccent ? a : p;
      const light = !comparator || weight <= comparator;

      return {
        color,
        name,
        light,
        divide: i === primaries.length,
      };
    });
  });

  return Object.assign({}, state, { colors });
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
    case INITIALIZE_COLORS:
      return initializeColors(state);
    default:
      return state;
  }
}
