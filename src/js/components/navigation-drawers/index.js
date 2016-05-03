export default {
  path: 'components/navigation-drawers',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./NavigationDrawerDocs').default);
    });
  },
};
