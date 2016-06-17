export default {
  path: 'components/file-inputs',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./FileInputDocs').default);
    });
  },
};
