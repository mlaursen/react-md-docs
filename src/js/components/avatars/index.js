export default {
  path: 'components/avatars',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./AvatarDocs').default);
    });
  },
};
