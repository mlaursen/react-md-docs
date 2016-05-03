export default {
  path: 'discover-more',
  childRoutes: [{
    path: 'community',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Community').default);
      });
    },
  }, {
    path: 'contributing',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Contributing').default);
      });
    },
  }],
};
