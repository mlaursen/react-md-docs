export default {
  path: 'components/sidebars',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./SidebarDocs').default);
    });
  },
};
