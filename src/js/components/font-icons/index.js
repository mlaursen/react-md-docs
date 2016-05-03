export default {
  path: 'components/font-icons',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./FontIconDocs').default);
    });
  },
};
