import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FontIconExamples from './FontIconExamples';
import FontIconExamplesRaw from '!!raw!./FontIconExamples';

import FontIcon from 'docgen/FontIcon.json';

const text = `
The \`FontIcon\` component is used to render different font libraries
with the material design specs. The default font icon library used
is the Material Icons.
`;

export default class FontIconDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
        docgens={[FontIcon]}
      />
    );
  }
}
