/*eslint-env node*/
if(typeof require.ensure !== 'function') {
  require.ensure = (d, c) => c(require);
}

import { getComponent } from './utils/RouteUtils';
import App from './containers/App';
import Home from './components/Home';

export default {
  path: '/',
  component: App,
  getChildRoutes(location, cb) {
    const { pathname } = location;
    const route = {
      path: pathname,
    };

    if(pathname === '/getting-started') {
      route.onEnter = (props, replace) => replace('/getting-started/installation');
    } else if(pathname === '/customization') {
      route.onEnter = (props, replace) => replace('/customization/colors');
    } else if(pathname === '/typography') {
      route.onEnter = (props, replace) => replace('/customization/typography');
    } else {
      route.getComponent = getComponent;
    }

    cb(null, [route]);
  },
  indexRoute: {
    component: Home,
  },
};
