import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Slider from 'react-md/lib/Sliders';

export default class DiscreteSliderExamples extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <Slider min={1} max={10} step={1} />
        <Slider min={1} max={100} step={2} disabled />
      </div>
    );
  }
}
