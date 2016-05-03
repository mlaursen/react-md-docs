export default {
  path: 'components/data-tables',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./DataTableDocs').default);
    });
  },
};
