import React, { Component } from 'react';

import Toolbar from 'react-md/lib/Toolbars';
import { IconButton } from 'react-md/lib/Buttons';
import { Tabs, Tab } from 'react-md/lib/Tabs';
import Paper from 'react-md/lib/Papers';
import LoremIpsum from '../LoremIpsum';

export default class ToolbarWithTabsExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper>
        <Toolbar
          primary
          actionLeft={<IconButton className="menu-btn">menu</IconButton>}
          title="Page title"
          actionsRight={(
            <div className="md-toolbar-item justify-end">
              <IconButton>search</IconButton>
              <IconButton>more_vert</IconButton>
            </div>
          )}
        >
          <Tabs primary>
            <Tab label="Item 1">
              <LoremIpsum count={3} />
            </Tab>
            <Tab label="Item 2">
              <LoremIpsum count={3} />
            </Tab>
            <Tab label="Item 3">
              <LoremIpsum count={3} />
            </Tab>
          </Tabs>
        </Toolbar>
      </Paper>
    );
  }
}
