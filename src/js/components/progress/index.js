export default {
  path: 'components/progress',
  childRoutes: [{
    path: 'circular',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./circular/CircularProgressDocs').default);
      });
    },
  }, {
    path: 'linear',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./linear/LinearProgressDocs').default);
      });
    },
  }],
};
