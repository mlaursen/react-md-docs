export default {
  path: 'components/dividers',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./DividerDocs').default);
    });
  },
};
