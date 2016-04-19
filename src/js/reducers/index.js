import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ui from './ui';
import docs from './docs';

const rootReducer = combineReducers({
  ui,
  docs,
  routing: routerReducer,
});

export default rootReducer;
