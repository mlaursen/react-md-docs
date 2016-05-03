export default {
  path: 'components/buttons',
  childRoutes: [{
    path: 'flat',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./flat/FlatButtonDocs').default);
      });
    },
  }, {
    path: 'floating',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./floating/FloatingButtonDocs').default);
      });
    },
  }, {
    path: 'icon',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./icon/IconButtonDocs').default);
      });
    },
  }, {
    path: 'raised',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./raised/RaisedButtonDocs').default);
      });
    },
  }],
};
