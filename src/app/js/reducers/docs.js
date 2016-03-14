import marked from 'marked';
import { GET_COMPONENT_DOCS } from '../constants/ActionTypes';
import { toTitle } from '../utils/StringUtils';

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


function getComponentDocs(state, component) {
  if(state.component === component) {
    return state;
  }

  return Object.assign({}, state, {
    component,
    sectionName: toTitle(component),
  });
}

const initialState = {
  marked,
};

export default function docs(state = initialState, action) {
  switch(action.type) {
    case GET_COMPONENT_DOCS:
      return getComponentDocs(state, action.component);
    default:
      return state;
  }
}
