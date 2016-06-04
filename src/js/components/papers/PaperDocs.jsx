import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

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

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
