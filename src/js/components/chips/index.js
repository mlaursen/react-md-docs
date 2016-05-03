export default {
  path: 'components/chips',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./ChipDocs').default);
    });
  },
};
