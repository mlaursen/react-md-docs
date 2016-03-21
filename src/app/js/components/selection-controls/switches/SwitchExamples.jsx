import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Switch } from 'react-md/lib/SelectionControls';

export default class SwitchExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Switch />
        <Switch label="Turn the lights on" defaultToggled={true} />
        <Switch label="Power outage" disabled />
      </div>
    );
  }
}
