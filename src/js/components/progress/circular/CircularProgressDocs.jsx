import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import DeterminateExample from './DeterminateExample';
import DeterminateExampleRaw from '!!raw!./DeterminateExample';
import IndeterminateExample from './IndeterminateExample';
import IndeterminateExampleRaw from '!!raw!./IndeterminateExample';

const text = `
Minimize visual changes that occur while your app loads content by representing each operation
with a single activity indicator. For example, a refresh operation should display either a
refresh bar or an activity circle, but not both.

There are 2 different types of circular progress bars: \`Determinate\` and \`Indeterminate\`.

A \`Determinate\` circular progress bar should be used when you can keep track of the progress
and have a percentage complete you can work with. An example would be uploading/downloading a
file.

An \`Indeterminate\` circular progress bar should be used when you can not keep track of the
progess yourself. An example might be waiting for an API call to complete.

> Circular Progress components are made with svg. If you need to support IE8 for some reason
> still, this won't display correctly.
`;

export default class CircularProgressDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Circular Progress"
        examples={[{
          name: 'Determinate Example',
          code: DeterminateExampleRaw,
          children: <DeterminateExample />,
        }, {
          name: 'Indeterminate Example',
          code: IndeterminateExampleRaw,
          children: <IndeterminateExample />,
        }]}
        components={[{
          name: 'CircularProgress',
          props: [{
            name: 'value',
            desc: 'An optional current value if the progress bar is determinate.',
            type: 'number',
          }, {
            name: 'scale',
            desc: 'An optional scale to give to the circular progress for it\'s size.',
            type: 'number',
            defaultValue: 1,
          }, {
            name: 'centered',
            desc: 'An optional boolean if the progress should be centered in the current line.',
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'determinateDashoffset',
            desc: `Since the circular progress is rendered as a svg, I use
            \`strokeDashoffset\` to update the current ciruclar progress. If you
            modify your \`CircularProgress\` styling and it breaks, maybe
            playing with this will help. Who knows.`,
            type: 'number',
            defaultValue: 187,
          }],
        }]}
      />
    );
  }
}
