import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import FontIconExamples from './FontIconExamples';
import FontIconExamplesRaw from '!!raw!./FontIconExamples';

import FontIcon from './FontIconDocgen.json';

const text = `
The \`FontIcon\` component is used to render different font libraries
with the material design specs. The default font icon library used
is the Material Icons.
`;

export default class FontIconDocs extends Component {
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
        sectionName="Font Icons"
        examples={[{
          code: FontIconExamplesRaw,
          children: <FontIconExamples />,
        }]}
        docgens={FontIcon}
      />
    );
  }
}
