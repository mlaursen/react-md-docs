import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SwitchExamples from './SwitchExamples';
import SwitchExamplesRaw from '!!raw!./SwitchExamples';

const text = `
On/off switches toggle the state of a single settings option. The option that the switch
controls, as well as the state it’s in, should be made clear from the corresponding inline
label. Switches take on the same visual properties of the radio button.
`;

export default class SwitchDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Switches"
        examples={[{
          code: SwitchExamplesRaw,
          children: <SwitchExamples />,
        }]}
        components={[{
          name: 'Switch',
          props: [{
            name: 'defaultToggled',
            desc: `Boolean if the switch is toggled by default.`,
            type: 'bool',
          }, {
            name: 'disabled',
            desc: `Boolean if the switch is disabled.`,
            type: 'bool',
          }, {
            name: 'toggled',
            desc: `Boolean if the switch is toggled. This will also make
            the Switch into a controlled component.`,
            type: 'bool',
          }, {
            name: 'onChange',
            desc: `The function to call when the switch is clicked.`,
            type: 'func',
          }, {
            name: 'label',
            desc: 'The optional label to display with the switch.',
            type: 'string',
          }, {
            name: 'labelBefore',
            desc: `Boolean if the label appears before the switch.`,
            type: 'bool',
            defaultValue: false,
          }],
        }]}
      />
    );
  }
}
