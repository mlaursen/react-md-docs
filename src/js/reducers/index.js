import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import dialogs from './dialogs';
import docs from './docs';
import layout from './layout';

const rootReducer = combineReducers({
  dialogs,
  docs,
  layout,
  routing: routerReducer,
});

export default rootReducer;
