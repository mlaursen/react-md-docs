import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Radio, RadioGroup } from 'react-md/lib/SelectionControls';

export default class ControlledRadioExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { value: 'A' };
  }

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <RadioGroup name="controlled" value={this.state.value} onChange={this.handleChange}>
          <Radio value="A" label="I want to subscribe to everything!" />
          <Radio value="B" label="I want to subscribe to just a lil' bit." />
          <Radio value="C" label="I do not want to subscribe." />
        </RadioGroup>
      </div>
    );
  }
}
