import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Tabs, Tab } from 'react-md/lib/Tabs';
import Toolbar from 'react-md/lib/Toolbars';
import { IconButton } from 'react-md/lib/Buttons';
import Paper from 'react-md/lib/Papers';
import FontIcon from 'react-md/lib/FontIcons';

import LoremIpsum from '../LoremIpsum';

export default class TabInToolbarExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Paper className="phone-size-container">
        <Toolbar
          primary
          title="Page Title"
          actionLeft={<IconButton>menu</IconButton>}
          actionsRight={<IconButton className="md-toolbar-item justify-end">search</IconButton>}
        >
          <Tabs primary={true} fixedWidth={true}>
            <Tab label="Recents" icon={<FontIcon>phone</FontIcon>}>
              <LoremIpsum count={3} />
            </Tab>
            <Tab label="Favorites" icon={<FontIcon>favorite</FontIcon>}>
              <LoremIpsum count={4} />
            </Tab>
            <Tab label="Near By" icon={<FontIcon>person_pin</FontIcon>}>
              <LoremIpsum count={2} />
            </Tab>
          </Tabs>
        </Toolbar>
      </Paper>
    );
  }
}
