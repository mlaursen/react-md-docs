import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import PaperExamples from './PaperExamples';
import PaperExamplesRaw from '!!raw!./PaperExamples';

const text = `
Paper is a wrapper component you can use to add the correct box
shadow to different components.

You can also use the sass mixin

\`\`\`scss
@include md-box-shadow(NUMBER);
\`\`\`
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
        components={[{
          name: 'Paper',
          props: [{
            name: 'zDepth',
            desc: `The zDepth of paper.`,
            type: 'oneOf([0, 1, 2, 3, 4, 5])',
          }],
        }]}
      />
    );
  }
}
