import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { connect } from 'react-redux';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Snackbar from 'react-md/lib/Snackbars';

import { APP_URI_BASE } from '../utils';
import { getNavItems } from '../utils/RouteUtils';
import { openDrawer, closeDrawer, updateTitle } from '../actions/layout';
import { dismissToast } from '../actions/docs';
import ThemeSwitcher from './ThemeSwitcher';
import AppFooter from '../components/AppFooter';

@connect(state => {
  return {
    marked: state.docs.marked,
    isOpen: state.layout.isDrawerOpen,
    title: state.layout.title,
    theme: state.layout.theme,
    drawerType: state.layout.drawerType,
    toasts: state.docs.toasts,
  };
}, {
  openDrawer,
  closeDrawer,
  updateTitle,
  dismissToast,
})
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    // from redux
    marked: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string,
    theme: PropTypes.string,
    drawerType: PropTypes.string.isRequired,
    toasts: PropTypes.array.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    updateTitle: PropTypes.func.isRequired,
    dismissToast: PropTypes.func.isRequired,

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
      isOpen,
      openDrawer,
      closeDrawer,
      location,
      title,
      theme,
      drawerType,
      toasts,
      dismissToast,
    } = this.props;

    let navHeaderChildren;
    if([NavigationDrawer.DrawerType.PERSISTENT, NavigationDrawer.DrawerType.PERSISTENT_MINI].indexOf(drawerType) === -1) {
      navHeaderChildren = <ThemeSwitcher />;
    }

    return (
      <div className={theme}>
        <NavigationDrawer
          containerClassName="react-md-docs"
          title="react-md"
          toolbarTitle={title}
          isOpen={isOpen}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          navItems={getNavItems(location.pathname)}
          drawerType={drawerType}
          navHeaderChildren={navHeaderChildren}
        >
          <CSSTransitionGroup
            component="main"
            transitionName="page"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            className={classnames({
              'text-page': location.pathname.indexOf('components') === -1 && location.pathname !== APP_URI_BASE + '/',
              'md-card-list': location.pathname.indexOf('components') !== -1,
            })}
          >
            {React.cloneElement(this.props.children, { key: location.pathname })}
          </CSSTransitionGroup>
          <AppFooter />
          <Snackbar toasts={toasts} dismiss={dismissToast} />
        </NavigationDrawer>
      </div>
    );
  }
}
