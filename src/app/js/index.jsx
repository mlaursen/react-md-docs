import '../scss/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import WebFont from 'webfontloader';

import Root from './containers/Root';
import configureStore from './stores/configureStore';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons', 'Source Code Pro'],
  },
});

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(<Root store={store} history={history} />, document.getElementById('app'));
