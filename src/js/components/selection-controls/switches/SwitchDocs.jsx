import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SwitchExamples from './SwitchExamples';
import SwitchExamplesRaw from '!!raw!./SwitchExamples';

import Switch from '!!json!docgen/Switch.json';

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
        docgens={[Switch]}
      />
    );
  }
}
