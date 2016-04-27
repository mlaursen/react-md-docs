import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { connect } from 'react-redux';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Snackbar from 'react-md/lib/Snackbars';

import { getNavItems } from '../utils/RouteUtils';
import { openDrawer, closeDrawer, updateTitle } from '../actions/ui';
import { dismissToast } from '../actions/docs';
import { hideOverlay } from '../actions/ui';
import ThemeSwitcher from './ThemeSwitcher';
import AppFooter from '../components/AppFooter';
import QuickSearch from './QuickSearch';

@connect(state => {
  return {
    marked: state.docs.marked,
    isOpen: state.ui.isDrawerOpen,
    title: state.ui.title,
    theme: state.ui.theme,
    drawerType: state.ui.drawerType,
    toasts: state.docs.toasts,
    isOverlayVisible: state.ui.isOverlayVisible,
    isMobile: state.ui.isMobile,
  };
}, {
  openDrawer,
  closeDrawer,
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
    isOpen: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    title: PropTypes.string,
    theme: PropTypes.string,
    drawerType: PropTypes.string.isRequired,
    toasts: PropTypes.array.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
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
      const { updateTitle, location, closeDrawer } = nextProps;
      updateTitle(location.pathname);
      closeDrawer();
    }
  }

  render() {
    const {
      isOpen,
      isMobile,
      openDrawer,
      closeDrawer,
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
    let navHeaderChildren, toolbarChildren;
    if([NavigationDrawer.DrawerType.PERSISTENT, NavigationDrawer.DrawerType.PERSISTENT_MINI].indexOf(drawerType) === -1 && !isHome) {
      navHeaderChildren = <ThemeSwitcher />;
    }

    if(!isHome && window.matchMedia('only screen and (min-width: 600px)').matches) {
      toolbarChildren = <QuickSearch />;
    }

    let overlay;
    if(isOverlayVisible) {
      overlay = <div key="overlay" className="md-overlay" onClick={hideOverlay} />;
    }

    return (
      <div className={isHome ? 'theme-1' : theme}>
        <NavigationDrawer
          containerClassName="react-md-docs"
          title="react-md"
          toolbarTitle={title}
          toolbarChildren={toolbarChildren}
          isOpen={isOpen}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          navItems={getNavItems(location.pathname)}
          drawerType={drawerType}
          navHeaderChildren={navHeaderChildren}
          isMobile={isMobile}
        >
          <CSSTransitionGroup
            component="main"
            transitionName="page"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            className={classnames({
              'text-page': location.pathname.indexOf('components') === -1 && location.pathname !== '/',
            })}
          >
            {React.cloneElement(children, { key: location.pathname })}
          </CSSTransitionGroup>
          <AppFooter />
          <Snackbar toasts={toasts} dismiss={dismissToast} />
          <CSSTransitionGroup
            transitionName="md-overlay"
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
          >
            {overlay}
          </CSSTransitionGroup>
        </NavigationDrawer>
      </div>
    );
  }
}
