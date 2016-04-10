/*eslint-env node*/
/*eslint-disable no-var*/
const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');

const app = express();
const root = path.resolve(__dirname, 'dist');

app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.listen(8080, function(err) {
  if(err) {
    throw err;
  }

  console.log('Started prod server on port 8080...');
});
