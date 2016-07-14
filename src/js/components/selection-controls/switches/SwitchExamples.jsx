import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Switch } from 'react-md/lib/SelectionControls';

export default class SwitchExamples extends Component {
  constructor(props) {
    super(props);

    this.state = { toggled: false };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
