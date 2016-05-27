import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import ContinuousSliderExamples from './ContinuousSliderExamples';
import ContinuousSliderExamplesRaw from '!!raw!./ContinuousSliderExamples';
import DiscreteSliderExamples from './DiscreteSliderExamples';
import DiscreteSliderExamplesRaw from '!!raw!./DiscreteSliderExamples';
import Slider from 'docgen/Slider.json';

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
        docgens={[Slider]}
      />
    );
  }
}
