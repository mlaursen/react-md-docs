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
};

export default function docs(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
