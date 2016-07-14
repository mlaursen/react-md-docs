import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
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
