import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { connect } from 'react-redux';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Snackbar from 'react-md/lib/Snackbars';

import Overlay from 'react-md/lib/Transitions/Overlay';
import { getNavItems } from '../utils/RouteUtils';
import { updateTitle } from '../actions/ui';
import { dismissToast } from '../actions/docs';
import { hideOverlay } from '../actions/ui';
import ThemeSwitcher from './ThemeSwitcher';
import AppFooter from '../components/AppFooter';
import QuickSearch from './QuickSearch';
import QuickNav from './QuickNav';

@connect(state => {
  return {
    marked: state.docs.marked,
    title: state.ui.title,
    theme: state.ui.theme,
    drawerType: state.ui.drawerType,
    toasts: state.docs.toasts,
    isOverlayVisible: state.ui.isOverlayVisible,
    isMobile: state.ui.isMobile,
    isLandscapeTablet: state.ui.isLandscapeTablet,
  };
}, {
  updateTitle,
  dismissToast,
  hideOverlay,
})
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    // from redux
    marked: PropTypes.func.isRequired,
    isLandscapeTablet: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    title: PropTypes.string,
    theme: PropTypes.string,
    drawerType: PropTypes.string.isRequired,
    toasts: PropTypes.array.isRequired,
    updateTitle: PropTypes.func.isRequired,
    dismissToast: PropTypes.func.isRequired,
    isOverlayVisible: PropTypes.bool.isRequired,
    hideOverlay: PropTypes.func.isRequired,

    // from react-router
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { updateTitle, location } = this.props;
    updateTitle(location.pathname);
  }

  componentWillUpdate(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname) {
      const { updateTitle, location } = nextProps;
      updateTitle(location.pathname);
    }
  }

  render() {
    const {
      isMobile,
      isLandscapeTablet,
      location,
      title,
      theme,
      drawerType,
      toasts,
      dismissToast,
      children,
      isOverlayVisible,
      hideOverlay,
    } = this.props;

    const isHome = location.pathname === '/';
    const { PERSISTENT, PERSISTENT_MINI } = NavigationDrawer.DrawerType;
    let navHeaderChildren, toolbarChildren;
    if([PERSISTENT, PERSISTENT_MINI].indexOf(drawerType) === -1 && !isHome && !(isLandscapeTablet)) {
      navHeaderChildren = <ThemeSwitcher />;
    }

    if(!isHome && !isMobile) {
      toolbarChildren = <QuickSearch />;
    }

    let quickNav;
    if(!isHome) {
      quickNav = <QuickNav />;
    }

    return (
      <div className={isHome ? 'theme-1' : theme}>
        <NavigationDrawer
          className="react-md-docs"
          drawerTitle="react-md"
          toolbarTitle={title}
          toolbarChildren={toolbarChildren}
          navItems={getNavItems(location.pathname)}
          tabletDrawerType={drawerType}
          desktopDrawerType={drawerType}
          drawerChildren={navHeaderChildren}
        >
          <CSSTransitionGroup
            component="main"
            transitionName="page"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            className={classnames({
              'text-page': location.pathname.indexOf('components') === -1 && location.pathname !== '/',
              'not-found': title && title.match('Not Found'),
            })}
          >
            {React.cloneElement(children, { key: location.pathname })}
          </CSSTransitionGroup>
          {quickNav}
          <AppFooter key="footer"/>
          <Snackbar key="snackbar" toasts={toasts} dismiss={dismissToast} />
          <Overlay key="overlay" isOpen={isOverlayVisible} onClick={hideOverlay} className="quick-search" />
        </NavigationDrawer>
      </div>
    );
  }
}
