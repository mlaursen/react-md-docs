import path from 'path';
import express from 'express';
import compress from 'compression';
import vhost from 'vhost';
import reactMD from './react-md';
import logger from 'morgan';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(process.cwd(), 'dist', 'client'));

app.use(compress());

const client = express.static(path.resolve(process.cwd(), 'dist', 'client'), {
  maxAge: 31536000,
});

let port = process.env.PORT || 8080;
if(process.env.NODE_ENV === 'production') {
  port = 80;
  app.use(logger('combined'));
  app.use(vhost('react-md.mlaursen.com', client));
  app.use(vhost('react-md.mlaursen.com', reactMD));
} else {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../../webpack-dev.client.config.js');

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler));

  app.use(logger('dev'));
  app.use(vhost('localhost', client));
  app.use(vhost('localhost', reactMD));
}

app.listen(port, err => {
  if(err) {
    throw err;
  }

  console.log('Started server on port ' + port);
});
