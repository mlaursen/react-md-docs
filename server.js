/*eslint-env node*/
/*eslint-disable no-var*/
const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');

const app = express();
const router = express.Router();
const root = path.resolve(__dirname, 'src/www');

router.use(express.static(root));
router.use(fallback('index.html', { root: root }));

app.use('/react-md', router);

app.listen(8080, function(err) {
  if(err) {
    throw err;
  }

  console.log('Started prod server on port 8080...');
});
