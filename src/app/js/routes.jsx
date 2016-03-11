import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { APP_URI_BASE } from './utils';
import App from './containers/App';
import Home from './components/Home';
import GettingStarted from './components/GettingStarted';
import Customization from './components/Customization';
import DocPage from './containers/DocPage';

export default (
  <Route path={`${APP_URI_BASE}/`} component={App}>
    <IndexRoute component={Home} />
    <Route path="getting-started" component={GettingStarted} />
    <Route path="customization" component={Customization} />
    <Route path="components/:component(/:subcomponent)" component={DocPage} />
  </Route>
);
