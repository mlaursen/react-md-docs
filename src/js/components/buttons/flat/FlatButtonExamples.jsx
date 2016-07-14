import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { FlatButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';

export default class FlatButtonExamples extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <p>Flat buttons can be unstyled or styled with the primary/secondary color.</p>
        <FlatButton label="Hello, World!" data-ink-target="true" />
        <FlatButton primary={true} label="Talk Dirty to Me">
          <FontIcon>chat_bubble_outline</FontIcon>
        </FlatButton>
        <FlatButton secondary={true} iconBefore={false} label="Talk Dirty to Me">
          <FontIcon>chat_bubble_outline</FontIcon>
        </FlatButton>

        <p>When a flat button is disabled, any styling will be overridden and they will not be clickable.</p>
        <FlatButton disabled label="But I am Disabled" />
        <FlatButton disabled label="But I am Disabled">
          <FontIcon>accessible</FontIcon>
        </FlatButton>
      </div>
    );
  }
}
