export default {
  path: 'components/subheaders',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./SubheaderDocs').default);
    });
  },
};
