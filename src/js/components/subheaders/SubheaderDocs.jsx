import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import SubheaderExamples from './SubheaderExamples';
import SubheaderExamplesRaw from '!!raw!./SubheaderExamples';

import Subheader from './SubheaderDocgen.json';

const text = `
Subheaders are list tiles that delineate sections of a list or grid list.
`;

export default class SubheaderDocs extends Component {
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
        sectionName="Subheaders"
        examples={[{
          code: SubheaderExamplesRaw,
          children: <SubheaderExamples />,
        }]}
        docgens={Subheader}
      />
    );
  }
}
