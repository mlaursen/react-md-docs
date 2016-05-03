export default {
  path: 'components/papers',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./PaperDocs').default);
    });
  },
};
