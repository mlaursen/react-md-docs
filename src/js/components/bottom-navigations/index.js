export default {
  path: 'components/bottom-navigations',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./BottomNavigationDocs').default);
    });
  },
};
