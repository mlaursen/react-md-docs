import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Toolbar from 'react-md/lib/Toolbars';
import { IconButton } from 'react-md/lib/Buttons';
import { Tabs, Tab } from 'react-md/lib/Tabs';
import Paper from 'react-md/lib/Papers';

export default class ToolbarWithTabsExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
            {Array.apply(null, new Array(3)).map((_, i) => (
              <Tab
                key={i}
                label={`Item ${i}`}
              >
                <div style={{ minHeight: '80px', background: '#fafafa' }} />
              </Tab>
            ))}
          </Tabs>
        </Toolbar>
      </Paper>
    );
  }
}
