import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from '../js/stores/configureStore';
import routes from '../js/routes';
import { initialState } from '../js/reducers/ui';

const reactMD = express.Router();

reactMD.get('/*', (req, res) => {
  const store = configureStore({
    ui: Object.assign({}, initialState, {
      isMobile: !!req.header('user-agent').match(/mobile/i),
    }),
  });

  match({ routes, location: req.url }, (error, redirectLocation, props) => {
    if(error) {
      req.status(500).send(error.message);
    } else if(redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if(props) {
      res.render('index', {
        html: renderToString(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        ),
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

export default reactMD;
