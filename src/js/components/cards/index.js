export default {
  path: 'components/cards',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./CardDocs').default);
    });
  },
};
