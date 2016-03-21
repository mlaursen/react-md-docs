import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import ContinuousSliderExamples from './ContinuousSliderExamples';
import ContinuousSliderExamplesRaw from '!!raw!./ContinuousSliderExamples';
import DiscreteSliderExamples from './DiscreteSliderExamples';
import DiscreteSliderExamplesRaw from '!!raw!./DiscreteSliderExamples';

const text = `
Sliders let users select a value from a continuous or discrete range of
values by moving the slider thumb. The smallest value is to the left,
the largest to the right. Sliders can have icons to the left and right of
the bar that reflect the value intensity. The interactive nature of the
slider makes it a great choice for settings that reflect intensity levels,
such as volume, brightness, or color saturation.
`;

export default class SliderDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Sliders"
        examples={[{
          name: 'Continuous Slider Examples',
          code: ContinuousSliderExamplesRaw,
          children: <ContinuousSliderExamples />,
        }, {
          name: 'Discrete Slider Examples',
          code: DiscreteSliderExamplesRaw,
          children: <DiscreteSliderExamples />,
        }]}
        components={[{
          name: 'Slider',
          props: [{
            name: 'defaultValue',
            desc: 'The default value for the slider.',
            type: 'number',
            defaultValue: 'this.props.min',
          }, {
            name: 'value',
            desc: `An optional value to use if the slider should be controlled.`,
            type: 'number',
          }, {
            name: 'min',
            desc: `The min value for the slider. It only seems to work
            with a value of 0 or 1 at this time.`,
            type: 'number',
            required: true,
            defaultValue: 0,
          }, {
            name: 'max',
            desc: `The max value for the slider. Most reliable as 10 or 100.`,
            type: 'number',
            required: true,
            defaultValue: 100,
          }, {
            name: 'onChange',
            desc: `An optional function to call when the slider's value
            changes. The function is called with \`onChange(newValue, event)\``,
            type: 'func',
          }, {
            name: 'onDragChange',
            desc: `An optional function to vall when the slider's value has changed
            when the user is dragging. This will be every tick instead of just at the end.
            The function is called with \`onDragChange(newValue, event)\`.`,
            type: 'func',
          }, {
            name: 'step',
            desc: `Any number to use for converting the slider into a discrete slider.
            This will be how many units the slider moves for each tick. Only tested with
            a value of 1.`,
            type: 'number',
          }, {
            name: 'stepPrecision',
            desc: `The number of decimal places to round to for the new step.`,
            type: 'number',
            defaultValue: 2,
          }],
        }]}
      />
    );
  }
}
