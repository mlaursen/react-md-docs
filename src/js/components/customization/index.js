export default {
  path: 'customization',
  childRoutes: [{
    path: 'colors',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Colors').default);
      });
    },
  }, {
    path: 'themes',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Themes').default);
      });
    },
  }, {
    path: 'media-queries',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./MediaQueries').default);
      });
    },
  }, {
    path: 'typography',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./Typography').default);
      });
    },
  }],
};
