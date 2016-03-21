import React, { Component } from 'react';
import Divider from 'react-md/lib/Dividers';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TextField from 'react-md/lib/TextFields';
import Paper from 'react-md/lib/Papers';
import { IconButton } from 'react-md/lib/Buttons';
import Toolbar from 'react-md/lib/Toolbars';

export default class FullWidthExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <p>Floating labels are automatically disabled for fullWidth text fields.</p>
        <Paper className="small-container">
          <Toolbar
            secondary
            title="Compose"
            actionLeft={<IconButton>arrow_back</IconButton>}
            actionsRight={<IconButton className="md-toolbar-item justify-end">send</IconButton>}
          />
          <form>
            <TextField
              label="From"
              type="email"
              fullWidth
            />
            <Divider />
            <TextField
              label="To"
              type="email"
              fullWidth
            />
            <Divider />
            <TextField
              label="Subject"
              maxLength={80}
              fullWidth
            />
            <Divider />
            <TextField
              placeholder="Message"
              rows={2}
              maxRows={-1}
              fullWidth
              maxLength={120}
            />
          </form>
        </Paper>
      </div>
    );
  }
}
