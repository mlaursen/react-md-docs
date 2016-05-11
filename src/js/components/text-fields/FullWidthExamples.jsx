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
        <p>Floating labels are automatically disabled for fullWidth text fields. Use the <code>block</code> prop to enable fullWidth text fields.</p>
        <Paper className="phone-size-container">
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
              block={true}
            />
            <Divider />
            <TextField
              label="To"
              type="email"
              block={true}
            />
            <Divider />
            <TextField
              label="Subject"
              maxLength={80}
              block={true}
            />
            <Divider />
            <TextField
              placeholder="Message"
              rows={2}
              maxRows={-1}
              block={true}
              maxLength={120}
            />
          </form>
        </Paper>
      </div>
    );
  }
}
