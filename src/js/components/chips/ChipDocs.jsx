import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import ChipExamples from './ChipExamples';
import ChipExamplesRaw from '!!raw!./ChipExamples';

import Chip from './ChipDocgen.json';

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
        docgens={Chip}
      />
    );
  }
}
