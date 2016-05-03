export default {
  path: 'components/lists',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./ListDocs').default);
    });
  },
};
