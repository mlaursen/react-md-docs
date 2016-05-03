export default {
  path: 'components/sliders',
  getComponent(location, cb) {
    require.ensure([], require => {
      cb(null, require('./SliderDocs').default);
    });
  },
};
