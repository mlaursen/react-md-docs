export default {
  path: 'components/tooltips',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./TooltipDocs').default);
    });
  },
};
