import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import InkExamples from './InkExamples';
import InkExamplesRaw from '!!raw!./InkExamples';

const text = `
Ink is used to wrap a single component with an ink affect. It adds touch and mouse listeners
to the child component.

> Just a reminder that you should not have a clickable element inside of another clickable element.
`;

export default class InkDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Inks"
        examples={[{
          code: InkExamplesRaw,
          children: <InkExamples />,
        }]}
        components={[{
          name: 'Ink',
          props: [{
            name: 'children',
            desc: 'A single react element to update with ink.',
            type: 'element',
            required: true,
          }, {
            name: 'disabled',
            desc: `Boolean if the ink is disabled.`,
            type: 'bool',
          }],
        }]}
      />
    );
  }
}
