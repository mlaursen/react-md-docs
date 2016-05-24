import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import NavigationDrawer from 'react-md/lib//NavigationDrawers';
import { IconButton } from 'react-md/lib/Buttons';

import NewPage from './NewPage';
import LoremIpsum from '../LoremIpsum';
import { randomAvatars } from '../../utils';

const avatars = randomAvatars(3);

export default class NewPageDemo extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { isOpen: false, page: 1 };
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  openDrawer = () => {
    this.setState({ isOpen: true });
  };

  closeDrawer = () => {
    this.setState({ isOpen: false });
  };

  closeDemo = () => {
    this.refs.newPage.closeDemo();
  };

  fakeChangePage = (page) => {
    this.setState({ page });
  };

  render() {
    const { isOpen, page } = this.state;

    const navItems = [{
      primaryText: 'Page 1',
      onClick: this.fakeChangePage.bind(this, 1),
      tileClassName: classnames({ active: page === 1 }),
      leftAvatar: avatars[0],
    }, {
      primaryText: 'Page 2',
      onClick: this.fakeChangePage.bind(this, 2),
      tileClassName: classnames({ active: page === 2 }),
      leftAvatar: avatars[1],
    }, {
      primaryText: 'Page 3',
      onClick: this.fakeChangePage.bind(this, 3),
      tileClassName: classnames({ active: page === 3 }),
      leftAvatar: avatars[2],
    }];

    return (
      <NewPage ref="newPage">
        <NavigationDrawer
          isOpen={isOpen}
          title="Navigation Title"
          toolbarTitle="Main Toolbar Title"
          openDrawer={this.openDrawer}
          closeDrawer={this.closeDrawer}
          drawerType={NavigationDrawer.DrawerType.PERSISTENT}
          navItems={navItems}
          toolbarChildren={
            <IconButton
              onClick={this.closeDemo}
              tooltipLabel="Close Demo"
              tooltipPosition="left"
              className="md-navigation-drawer-btn fr"
            >
              close
            </IconButton>
          }
        >
          <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="page"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <section key={page} className="text-container">
              <h1>On Page {page}</h1>
              <LoremIpsum count={20} />
            </section>
          </CSSTransitionGroup>
        </NavigationDrawer>
      </NewPage>
    );
  }
}
