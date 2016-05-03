export default {
  path: 'components/selection-controls',
  childRoutes: [{
    path: 'checkboxes',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./checkboxes/CheckboxDocs').default);
      });
    },
  }, {
    path: 'radios',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./radios/RadioDocs').default);
      });
    },
  }, {
    path: 'switches',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./switches/SwitchDocs').default);
      });
    },
  }],
};
