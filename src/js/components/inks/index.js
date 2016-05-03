export default {
  path: 'components/inks',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./InkDocs').default);
    });
  },
};
