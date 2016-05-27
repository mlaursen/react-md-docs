#!/bin/bash
rm -rf dist server
webpack --config webpack-prod.config.js --progress
mv dist/index.ejs server/index.ejs
sed -i 's/"app">/"app"><%- html %>/' server/index.ejs
node server/server.js
