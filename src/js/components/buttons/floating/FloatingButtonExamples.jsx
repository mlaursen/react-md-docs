import React, { Component } from 'react';
import { FloatingButton } from 'react-md/lib/Buttons';
import shallowCompare from 'react-addons-shallow-compare';

export default class FloatingButtonExamples extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div className="floating-btn-examples">
        <p>Floating buttons can be unstyled or styled with the primary/secondary color.</p>
        <FloatingButton>home</FloatingButton>
        <FloatingButton primary={true}>share</FloatingButton>
        <FloatingButton secondary={true}>favorite</FloatingButton>

        <p>Just like any other <code>FontIcon</code>, hopefully any font-icon library can be used.</p>
        <FloatingButton secondary={true} iconClassName="fa fa-star-o" />

        <p>
          When a floating button is disabled, any styling will be overridden and they
          will not be clickable.
        </p>
        <FloatingButton primary={true} disabled>favorite</FloatingButton>
        <FloatingButton secondary={true} disabled>accessible</FloatingButton>
      </div>
    );
  }
}
