import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import DividerExamples from './DividerExamples';
import DividerExamplesRaw from '!!raw!./DividerExamples';

import Divider from './DividerDocgen.json';

const text = `
Dividers group and separate content within lists and page layouts.
The divider is a thin rule, lightweight yet sufficient to distinguish
content visually and spatially.
`;

export default class DividerDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Dividers"
        examples={[{
          code: DividerExamplesRaw,
          children: <DividerExamples />,
        }]}
        docgens={Divider}
      />
    );
  }
}
