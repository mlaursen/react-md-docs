import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FloatingLabelExamples from './FloatingLabelExamples';
import FloatingLabelExamplesRaw from '!!raw!./FloatingLabelExamples';
import SingleLineExamples from './SingleLineExamples';
import SingleLineExamplesRaw from '!!raw!./SingleLineExamples';
import StatefulExamples from './StatefulExamples';
import StatefulExamplesRaw from '!!raw!./StatefulExamples';
import InfoExamples from './InfoExamples';
import InfoExamplesRaw from '!!raw!./InfoExamples';
import FullWidthExamples from './FullWidthExamples';
import FullWidthExamplesRaw from '!!raw!./FullWidthExamples';
import InToolbarExample from './InToolbarExample';
import InToolbarExampleRaw from '!!raw!./InToolbarExample';

import TextField from 'docgen/TextField.json';

const text = `
Text fields allow the user to input text, select text, and lookup data via auto-completion.
`;

export default class TextFieldDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Text Fields"
        examples={[{
          name: 'Floating Label Examples',
          code: FloatingLabelExamplesRaw,
          children: <FloatingLabelExamples />,
        }, {
          name: 'Single Line Label Examples',
          code: SingleLineExamplesRaw,
          children: <SingleLineExamples />,
        }, {
          name: 'With Icons / Stateful Examples',
          code: StatefulExamplesRaw,
          children: <StatefulExamples />,
        }, {
          name: 'With Info/Error Text',
          code: InfoExamplesRaw,
          children: <InfoExamples />,
        }, {
          name: 'Full Width Examples',
          code: FullWidthExamplesRaw,
          children: <FullWidthExamples />,
        }, {
          name: 'In Toolbars',
          code: InToolbarExampleRaw,
          children: <InToolbarExample />,
        }]}
        docgens={[TextField]}
      />
    );
  }
}
