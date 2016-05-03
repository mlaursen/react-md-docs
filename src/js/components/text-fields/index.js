export default {
  path: 'components/text-fields',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./TextFieldDocs').default);
    });
  },
};
