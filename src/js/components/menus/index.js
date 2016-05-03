export default {
  path: 'components/menus',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./MenuDocs').default);
    });
  },
};
