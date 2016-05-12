import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Switch } from 'react-md/lib/SelectionControls';

export default class SwitchExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { toggled: false };
  }

  handleChange = (toggled, event) => { // eslint-disable-line no-unused-vars
    this.setState({ toggled });
  };

  render() {
    return (
      <div>
        <Switch />
        <Switch label="Turn the lights on" defaultToggled={true} />
        <Switch label="Power outage" disabled />
        <Switch label="I am controlled" toggled={this.state.toggled} onChange={this.handleChange} />
      </div>
    );
  }
}
