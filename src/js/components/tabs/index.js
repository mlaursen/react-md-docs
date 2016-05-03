export default {
  path: 'components/tabs',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./TabDocs').default);
    });
  },
};
