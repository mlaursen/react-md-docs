import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import ChipExamples from './ChipExamples';
import ChipExamplesRaw from '!!raw!./ChipExamples';

const text = `
Chips represent complex entities in small blocks, such as a contact.
`;

export default class ChipDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Chips"
        examples={[{
          code: ChipExamplesRaw,
          children: <ChipExamples />,
        }]}
        components={[{
          name: 'Chip',
          others: false,
          props: [{
            name: 'label',
            desc: 'The label to display in the chip.',
            type: 'string',
          }, {
            name: 'remove',
            desc: `An optional function to convert the chip into a removable
            chip. This will add the remove icon to the chip.`,
            type: 'func',
          }, {
            name: 'removeIcon',
            desc: `The remove icon to display.`,
            type: 'node',
            defaultValue: `<FontIcon style={{ transform: 'rotate(45deg)' }}>add_circle</FontIcon>`,
          }, {
            name: 'onClick',
            desc: `The onClick function for the chip.`,
            type: 'func',
          }, {
            name: 'children',
            desc: `This should be an Avatar component to display.`,
            type: 'node',
          }],
        }]}
      />
    );
  }
}
