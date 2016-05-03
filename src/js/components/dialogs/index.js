export default {
  path: 'components/dialogs',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./DialogDocs').default);
    });
  },
};
