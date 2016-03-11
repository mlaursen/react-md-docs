import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { APP_URI_BASE } from './utils';
import App from './containers/App';
import Home from './components/Home';

export default (
  <Route path={`${APP_URI_BASE}/`} component={App}>
    <IndexRoute component={Home} />
  </Route>
);
