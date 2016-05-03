export default {
  path: 'getting-started',
  childRoutes: [{
    path: 'prerequisites',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Prerequisites').default);
      });
    },
  }, {
    path: 'installation',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Installation').default);
      });
    },
  }],
};
