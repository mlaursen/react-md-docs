import React, { Component } from 'react';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import { IconButton } from 'react-md/lib/Buttons';

import PhoneSize from '../PhoneSize';

export default class FullWidthExamples extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Floating labels are automatically disabled for fullWidth text fields. Use the <code>block</code> prop to enable fullWidth text fields.</p>
        <PhoneSize
          iconLeft="arrow_back"
          actionsRight={<IconButton className="md-toolbar-item justify-end">send</IconButton>}
          contentComponent="form"
        >
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
        </PhoneSize>
      </div>
    );
  }
}
