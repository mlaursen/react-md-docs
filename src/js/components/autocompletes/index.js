export default {
  path: 'components/autocompletes',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./AutocompleteDocs').default);
    });
  },
};
