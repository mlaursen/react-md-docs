/*eslint-env node*/
module.exports = require(process.env.NODE_ENV === 'production' ? './Root.prod' : './Root.dev');
