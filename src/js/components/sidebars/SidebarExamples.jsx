import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import loremIpsum from 'lorem-ipsum';

import { setOverflow } from 'react-md/lib/utils';
import { RaisedButton, IconButton } from 'react-md/lib/Buttons';
import Divider from 'react-md/lib/Dividers';
import { List, ListItem } from 'react-md/lib/Lists';
import Sidebar from 'react-md/lib/Sidebars';
import Subheader from 'react-md/lib/Subheaders';
import Toolbar from 'react-md/lib/Toolbars';

import { randomAvatars } from '../../utils';
import LoremIpsum from '../LoremIpsum';

const wordOpts = { count: 5, units: 'words' };
const avatars = randomAvatars(5);

export default class SidebarExamples extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, align: 'left' };
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.state.isOpen === nextProps.isOpen) { return; }
    // Utility to hide page overflow.
    setOverflow(nextState.isOpen);
  }

  toggleOpenLeft = () => {
    this.setState({ isOpen: !this.state.isOpen, align: 'left' });
  };

  toggleOpenRight = () => {
    this.setState({ isOpen: !this.state.isOpen, align: 'right' });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const items = Array.apply(null, new Array(11)).map((_, key) => {
      if(key === 4 || key === 10) {
        return <Divider key={key} />;
      }

      const text = loremIpsum(wordOpts);
      const props = {
        key,
        primaryText: text.charAt(0).toUpperCase() + text.substring(1, text.lenght),
      };

      if(key === 5) {
        return <Subheader {...props} primaryText="Some Subheader" />;
      } else if(key > 5 && key < 10) {
        props.leftAvatar = avatars[key - 5];
      }

      return <ListItem {...props} />;
    });
    return (
      <div className="flex-around sidebar-fixed-example">
        <RaisedButton label="Toggled Fixed Sidebar Left" onClick={this.toggleOpenLeft} />
        <RaisedButton label="Toggled Fixed Sidebar Right" onClick={this.toggleOpenRight} />
        <Sidebar
          {...this.state}
          fixed={true}
          overlay={true}
          responsive={false}
          onOverlayClick={this.close}
          header={(
            <Toolbar
              actionLeft={<IconButton onClick={this.close}>arrow_back</IconButton>}
              title="Wow!"
            />
          )}
        >
          <List>
            {items}
          </List>
          <LoremIpsum count={2} className="md-body-1 padded" />
        </Sidebar>
      </div>
    );
  }
}
