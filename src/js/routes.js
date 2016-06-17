import App from './containers/App';

export default {
  path: '/',
  component: App,
  getIndexRoute(location, cb) {
    require.ensure([], require => {
      cb(null, {
        component: require('./components/Home').default,
      });
    });
  },
  getChildRoutes(location, cb) {
    require.ensure([], require => {
      cb(null, [
        require('./components/getting-started').default,
        require('./components/customization').default,
        require('./components/discover-more').default,
        require('./components/avatars').default,
        require('./components/bottom-navigations').default,
        require('./components/buttons').default,
        require('./components/cards').default,
        require('./components/chips').default,
        require('./components/data-tables').default,
        require('./components/dialogs').default,
        require('./components/dividers').default,
        require('./components/file-inputs').default,
        require('./components/font-icons').default,
        require('./components/lists').default,
        require('./components/inks').default,
        require('./components/menus').default,
        require('./components/navigation-drawers').default,
        require('./components/papers').default,
        require('./components/pickers').default,
        require('./components/progress').default,
        require('./components/select-fields').default,
        require('./components/selection-controls').default,
        require('./components/sidebars').default,
        require('./components/sliders').default,
        require('./components/snackbars').default,
        require('./components/subheaders').default,
        require('./components/tabs').default,
        require('./components/text-fields').default,
        require('./components/toolbars').default,
        require('./components/tooltips').default,
        require('./components/NotFoundRoute').default,
      ]);
    });
  },
};
