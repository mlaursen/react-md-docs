import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import docs from './docs';

const rootReducer = combineReducers({
  docs,
  routing: routerReducer,
});

export default rootReducer;
