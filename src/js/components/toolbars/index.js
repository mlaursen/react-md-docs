export default {
  path: 'components/toolbars',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./ToolbarDocs').default);
    });
  },
};
