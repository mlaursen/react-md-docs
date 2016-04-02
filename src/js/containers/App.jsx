import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Menu from 'react-md/lib/Menus';
import { ListItem } from 'react-md/lib/Lists';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import Snackbar from 'react-md/lib/Snackbars';

import { APP_URI_BASE } from '../utils';
import { getNavItems } from '../utils/RouteUtils';
import { openDrawer, closeDrawer, updateTitle } from '../actions/layout';
import { dismissToast, stopQuickSearching } from '../actions/docs';
import ThemeSwitcher from './ThemeSwitcher';
import AppFooter from '../components/AppFooter';
import QuickSearch from './QuickSearch';

@connect(state => {
  return {
    marked: state.docs.marked,
    isOpen: state.layout.isDrawerOpen,
    title: state.layout.title,
    theme: state.layout.theme,
    drawerType: state.layout.drawerType,
    toasts: state.docs.toasts,
    matches: state.docs.matches,
    isQuickSearching: state.docs.isQuickSearching,
  };
}, {
  openDrawer,
  closeDrawer,
  updateTitle,
  dismissToast,
  stopQuickSearching,
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
    matches: PropTypes.array.isRequired,
    isQuickSearching: PropTypes.bool.isRequired,
    stopQuickSearching: PropTypes.func.isRequired,

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
      openDrawer,
      closeDrawer,
      location,
      title,
      theme,
      drawerType,
      toasts,
      dismissToast,
      children,
      matches,
      isQuickSearching,
      stopQuickSearching,
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
          toolbarChildren={location.pathname !== APP_URI_BASE + '/' && <QuickSearch />}
          isOpen={isOpen}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
          navItems={getNavItems(location.pathname)}
          drawerType={drawerType}
          navHeaderChildren={navHeaderChildren}
        >
          <Menu
            isOpen={isQuickSearching && matches.length > 0}
            position={Menu.Positions.TOP_LEFT}
            className="quick-search-menu-container"
            listClassName="quick-search-menu"
          >
            {matches.map(props => <ListItem {...props} onClick={stopQuickSearching} />)}
          </Menu>
          <CSSTransitionGroup
            component="main"
            transitionName="page"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            className={classnames({
              'text-page': location.pathname.indexOf('components') === -1 && location.pathname !== APP_URI_BASE + '/',
            })}
          >
            {React.cloneElement(children, { key: location.pathname })}
          </CSSTransitionGroup>
          <AppFooter />
          <Snackbar toasts={toasts} dismiss={dismissToast} />
          <CSSTransitionGroup
            component="div"
            transitionName="md-overlay"
            transitionEnterTimeout={150}
            transitionLeaveTimeout={150}
          >
            {isQuickSearching && <div key="overlay" className="md-overlay" onClick={stopQuickSearching} />}
          </CSSTransitionGroup>
        </NavigationDrawer>
      </div>
    );
  }
}
