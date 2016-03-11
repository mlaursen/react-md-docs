import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Avatar from 'react-md/lib/Avatars';
import FontIcon from 'react-md/lib/FontIcons';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import sassIcon from '../../imgs/sass-icon.png';
const reactLogo = 'https://facebook.github.io/react/img/logo.svg';
const googleLogo = 'https://i.ytimg.com/vi/PAKCgvprpQ8/maxresdefault.jpg';

import { APP_URI_BASE } from '../utils';
import { openDrawer, closeDrawer } from '../actions/docs';

@connect(state => {
  return {
    marked: state.docs.marked,
    isOpen: state.docs.isDrawerOpen,
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

  static childContextTypes = {
    marked: PropTypes.func.isRequired,
  };

  getChildContext = () => {
    return { marked: this.props.marked };
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

  mapNavItemsToLink = ({ component, icon, avatarProps, path, ...props }) => {
    if(props.subheader || props.divider) {
      return props;
    }

    let left;
    if(icon) {
      left = <FontIcon>{icon}</FontIcon>;
    } else if(avatarProps) {
      left = <Avatar {...avatarProps} className="fake-icon" />;
    }

    const { pathname } = this.props.location;
    const to = `${APP_URI_BASE}/${path}`;
    return {
      ...props,
      to,
      className: pathname === to ? 'active' : null,
      component: component || Link,
      leftIcon: left,
    };
  };

  render() {
    const { isOpen, openDrawer, closeDrawer, location } = this.props;
    const { theme, pageTitle } = this.mapRouteToDrawerProps();

    const navItems = [{
      path: '',
      icon: 'home',
      primaryText: 'Home',
    }, {
      path: 'getting-started',
      icon: 'info_outline',
      primaryText: 'Getting Started',
    }, {
      path: 'customization',
      icon: 'color_lens',
      primaryText: 'Customization',
    }, {
      path: 'typography',
      icon: 'text_fields',
      primaryText: 'Typography',
    }, {
      component: 'a',
      href: `${APP_URI_BASE}/sassdoc`,
      avatarProps: { src: sassIcon, alt: 'SASS icon' },
      primaryText: 'SASS Doc',
    }, { divider: true }, {
      component: 'a',
      href: 'https://facebook.github.io/react/',
      avatarProps: { src: reactLogo, alt: 'React Logo' },
      primaryText: 'React',
    }, {
      component: 'a',
      href: 'https://www.google.com/design/spec/material-design/introduction.html',
      avatarProps: { src: googleLogo, alt: 'Google Logo' },
      primaryText: 'Material Design',
    }, {
      component: 'a',
      href: 'https://design.google.com/icons/',
      avatarProps: { src: googleLogo, alt: 'Google Logo' },
      primaryText: 'Material Icons',
    }].map(this.mapNavItemsToLink);
    return (
      <NavigationDrawer
        className={classnames('react-md-docs', theme)}
        title="react-md"
        toolbarTitle={pageTitle}
        isOpen={isOpen}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        navItems={navItems}
      >
        <main>
          {React.cloneElement(this.props.children, { key: location.pathname })}
        </main>
      </NavigationDrawer>
    );
  }
}
