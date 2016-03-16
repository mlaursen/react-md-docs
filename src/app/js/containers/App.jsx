import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { APP_URI_BASE } from '../utils';
import { getNavItems } from '../utils/RouteUtils';
import { openDrawer, closeDrawer, updateTitle } from '../actions/layout';
import ThemeSwitcher from './ThemeSwitcher';
import AppFooter from '../components/AppFooter';

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
  updateTitle,
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
    updateTitle: PropTypes.func.isRequired,

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
    const { isOpen, openDrawer, closeDrawer, location, title, theme } = this.props;
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
          navHeaderChildren={<ThemeSwitcher />}
        >
          <main
            className={classnames({
              'text-page': location.pathname.indexOf('components') === -1 && location.pathname !== APP_URI_BASE + '/',
              'md-card-list': location.pathname.indexOf('components') !== -1,
            })}
          >
            {React.cloneElement(this.props.children, { key: location.pathname })}
          </main>
          <AppFooter />
        </NavigationDrawer>
      </div>
    );
  }
}
