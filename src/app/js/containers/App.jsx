import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { APP_URI_BASE } from '../utils';
import { getNavItems } from '../utils/RouteUtils';
import { openDrawer, closeDrawer } from '../actions/layout';

@connect(state => {
  return {
    marked: state.docs.marked,
    isOpen: state.layout.isDrawerOpen,
  };
}, {
  openDrawer,
  closeDrawer,
})
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    // from redux
    marked: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,

    // from react-router
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  };

  mapRouteToDrawerProps = () => {
    const { pathname } = this.props.location;
    let pageTitle, theme;
    switch(pathname) {
      case APP_URI_BASE:
        // defaults
        break;
      default:
        pageTitle = 'Components';
    }

    return { pageTitle, theme };
  };

  render() {
    const { isOpen, openDrawer, closeDrawer, location } = this.props;
    const { theme, pageTitle } = this.mapRouteToDrawerProps();
    return (
      <NavigationDrawer
        className={classnames('react-md-docs', theme)}
        title="react-md"
        toolbarTitle={pageTitle}
        isOpen={isOpen}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        navItems={getNavItems(location.pathname)}
      >
        <main>
          {React.cloneElement(this.props.children, { key: location.pathname })}
        </main>
      </NavigationDrawer>
    );
  }
}
