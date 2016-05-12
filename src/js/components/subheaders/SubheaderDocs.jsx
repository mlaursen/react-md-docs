import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SubheaderExamples from './SubheaderExamples';
import SubheaderExamplesRaw from '!!raw!./SubheaderExamples';

import Subheader from '!!json!docgen/Subheader.json';

const text = `
Subheaders are list tiles that delineate sections of a list or grid list.
`;

export default class SubheaderDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Subheaders"
        examples={[{
          code: SubheaderExamplesRaw,
          children: <SubheaderExamples />,
        }]}
        docgens={[Subheader]}
      />
    );
  }
}
