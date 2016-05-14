import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import Avatar from 'react-md/lib/Avatars';
import Sidebar from 'react-md/lib/Sidebars';
import Subheader from 'react-md/lib/Subheaders';
import FontIcon from 'react-md/lib/FontIcons';
import SelectField from 'react-md/lib/SelectFields';
import { List, ListItem } from 'react-md/lib/Lists';
import { Card, CardTitle, CardText } from 'react-md/lib/Cards';

import FullPageDemo from '../FullPageDemo';
import LoremIpsum from '../LoremIpsum';
import { randomImage } from '../../utils';
import './_sidebar-demo.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <header className="account-picker" data-i-tried="true">
        <div className="avatar-blocks">
          <Avatar src={randomImage({ width: 56 })} className="active" alt="Random Avatar" />
          <Avatar src={randomImage()} alt="Backup Avatar" />
        </div>
        <h3 className="account-name">Jonathan Lee</h3>
        <SelectField
          fullWidth
          defaultValue="heyfromjonathan@gmail.com"
          menuItems={['heyfromjonathan@gmail.com', 'altemail@gmail.com']}
          position={SelectField.Positions.BELOW}
        />
      </header>
    );
  }
}

export default class ResponsiveSidebarExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <FullPageDemo title="Responsive Sidebar" onClick={this.toggle}>
        <Sidebar
          isOpen={isOpen}
          onOverlayClick={this.close}
          className="list-dialog-fix"
          header={<Header />}
        >
          <List className="white-rel">
            <ListItem primaryText="Inbox" leftIcon={<FontIcon>inbox</FontIcon>} />
            <ListItem primaryText="Starred" leftIcon={<FontIcon>star</FontIcon>} />
            <ListItem primaryText="Sent Mail" leftIcon={<FontIcon>send</FontIcon>} />
            <ListItem primaryText="Drafts" leftIcon={<FontIcon>drafts</FontIcon>} />
            <Subheader primaryText="Subheader" />
            <ListItem primaryText="All Mail" leftIcon={<FontIcon>email</FontIcon>} />
            <ListItem primaryText="Trash" leftIcon={<FontIcon>delete</FontIcon>} />
            <ListItem primaryText="Spam" leftIcon={<FontIcon>info</FontIcon>} />
          </List>
        </Sidebar>
        <section className={classnames('some-content', { 'md-sidebar-relative': isOpen })}>
          <Card className="container">
            <CardTitle
              title="Click the menu button to toggle the responsive sidebar"
              subtitle="The overlay will appear on mobile devices"
            />
            <CardText component={LoremIpsum} count={5} />
          </Card>
        </section>
      </FullPageDemo>
    );
  }
}
