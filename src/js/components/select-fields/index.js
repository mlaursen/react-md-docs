export default {
  path: 'components/select-fields',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./SelectFieldDocs').default);
    });
  },
};
