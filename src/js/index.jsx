import '../scss/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import WebFont from 'webfontloader';

import { polyfillIntlLang, polyfillIntlOSLang } from './utils';

import Root from './containers/Root';
import configureStore from './stores/configureStore';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons', 'Source Code Pro'],
  },
  custom: {
    families: ['FontAwesome'],
    urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'],
  },
});

polyfillIntlOSLang();
polyfillIntlLang('da-DK');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(<Root store={store} history={history} />, document.getElementById('app'));