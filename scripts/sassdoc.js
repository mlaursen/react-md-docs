#!/usr/bin/env node
/*eslint-env node*/
'use strict';

const path = require('path');
const sassdoc = require('sassdoc');

const reactMD = path.resolve(process.cwd(), 'node_modules', 'react-md');

sassdoc(path.resolve(reactMD, 'src', 'scss'), {
  dest: path.resolve(process.cwd(), 'dist', 'sassdoc'),
  package: path.resolve(reactMD, 'package.json'),
  display: {
    alias: true,
    access: ['public'],
  },
  googleAnalytics: 'UA-76079335-1',
});
