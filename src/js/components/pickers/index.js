export default {
  path: 'components/pickers',
  childRoutes: [{
    path: 'date',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./date/DatePickerDocs').default);
      });
    },
  }, {
    path: 'time',
    getComponent(location, cb) {
      require.ensure([], require => {
        cb(null, require('./time/TimePickerDocs').default);
      });
    },
  }],
};
