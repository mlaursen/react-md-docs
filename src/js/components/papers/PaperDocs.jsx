import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import PaperExamples from './PaperExamples';
import PaperExamplesRaw from '!!raw!./PaperExamples';

import Paper from './PaperDocgen.json';
const text = `
Paper is a wrapper component you can use to add the correct box
shadow to different components.
`;

export default class PaperDocs extends Component {
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
        sectionName="Papers"
        examples={[{
          code: PaperExamplesRaw,
          children: <PaperExamples />,
        }]}
        docgens={Paper}
      />
    );
  }
}
