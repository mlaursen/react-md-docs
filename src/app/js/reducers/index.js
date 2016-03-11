import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import docs from './docs';
import layout from './layout';

const rootReducer = combineReducers({
  docs,
  layout,
  routing: routerReducer,
});

export default rootReducer;
