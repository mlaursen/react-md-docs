export default {
  path: 'components/snackbars',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./SnackbarDocs').default);
    });
  },
};
