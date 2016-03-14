import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { getNavItems } from '../utils/RouteUtils';
import { openDrawer, closeDrawer, updateLayoutTitleTheme } from '../actions/layout';

@connect(state => {
  return {
    marked: state.docs.marked,
    isOpen: state.layout.isDrawerOpen,
    title: state.layout.title,
    theme: state.layout.theme,
  };
}, {
  openDrawer,
  closeDrawer,
  updateLayoutTitleTheme,
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
    openDrawer: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    updateLayoutTitleTheme: PropTypes.func.isRequired,

    // from react-router
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { updateLayoutTitleTheme, location } = this.props;
    updateLayoutTitleTheme(location.pathname);
  }

  componentWillUpdate(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname) {
      const { updateLayoutTitleTheme, location } = nextProps;
      updateLayoutTitleTheme(location.pathname);
    }
  }

  render() {
    const { isOpen, openDrawer, closeDrawer, location, title, theme } = this.props;
    return (
      <NavigationDrawer
        containerClassName={classnames('react-md-docs', theme)}
        title="react-md"
        toolbarTitle={title}
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
