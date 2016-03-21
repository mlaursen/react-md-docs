import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Slider from 'react-md/lib/Sliders';

export default class DiscreteSliderExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
