import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Menu from 'react-md/lib/Menus';
import { RaisedButton, IconButton } from 'react-md/lib/Buttons';
import { ListItem } from 'react-md/lib/Lists';

const kebabMenu = 'more_vert';

export default class ToggleableMenuExamlples extends Component {
  constructor(props) {
    super(props);

    this.state = { open: false, open2: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  close = () => {
    this.setState({ open: false });
  };

  toggle2 = () => {
    this.setState({ open2: !this.state.open2 });
  };

  close2 = () => {
    this.setState({ open2: false });
  };

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.open}
          toggle={(
            <RaisedButton
              onClick={this.toggle}
              label="Toggle open a menu"
            />
          )}
          position={Menu.Positions.TOP_LEFT}
          close={this.close}
        >
          <ListItem primaryText="First Item" />
          <ListItem primaryText="Second Item" />
          <ListItem primaryText="Third Item" />
          <ListItem primaryText="Forth Item" />
        </Menu>
        <Menu
          isOpen={this.state.open2}
          toggle={(
            <IconButton onClick={this.toggle2} tooltipLabel="More options">{kebabMenu}</IconButton>
          )}
          close={this.close2}
        >
          <ListItem primaryText="First Item" />
          <ListItem primaryText="Second Item" />
          <ListItem primaryText="Third Item" />
          <ListItem primaryText="Forth Item" />
        </Menu>
      </div>
    );
  }
}
