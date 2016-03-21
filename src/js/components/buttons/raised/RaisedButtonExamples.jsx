import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { RaisedButton } from 'react-md/lib/Buttons';
import FontIcon from 'react-md/lib/FontIcons';

export default class RaisedButtonExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <p>Raised buttons can be unstyled or styled with the primary/secondary color.</p>
        <RaisedButton label="Hello, World!" />
        <RaisedButton primary={true} label="Talk Dirty to Me">
          <FontIcon iconClassName="fa fa-hand-spock-o" />
        </RaisedButton>
        <RaisedButton secondary={true} iconBefore={false} label="Talk Dirty to Me">
          <FontIcon iconClassName="fa fa-hand-paper-o" />
        </RaisedButton>

        <p>When a flat button is disabled, any styling will be overridden and they will not be clickable.</p>
        <RaisedButton disabled label="But I am Disabled" />
        <RaisedButton disabled label="But I am Disabled">
          <FontIcon>accessible</FontIcon>
        </RaisedButton>
      </div>
    );
  }
}
