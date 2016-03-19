import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import DeterminateExample from './DeterminateExample';
import DeterminateExampleRaw from '!!raw!./DeterminateExample';
import IndeterminateExample from './IndeterminateExample';
import IndeterminateExampleRaw from '!!raw!./IndeterminateExample';
import QueryIndeterminateExample from './QueryIndeterminateExample';
import QueryIndeterminateExampleRaw from '!!raw!./QueryIndeterminateExample';

const text = `
Minimize visual changes that occur while your app loads content by representing each operation
with a single activity indicator. For example, a refresh operation should display either a
refresh bar or an activity circle, but not both.

There are 3 different types of linear progress bars: \`Determinate\`, \`Indeterminate\`, and
\`Query Indeterminate\`.

A \`Determinate\` linear progress bar should be used when you can keep track of the progress
and have a percentage complete you can work with. An example would be uploading/downloading a
file.

An \`Indeterminate\` linear progress bar should be used when you can not keep track of the
progess yourself. An example might be waiting for an API call to complete.

A \`Query Indeterminate\` linear progress bar is used when you are combining \`Indeterminate\`
and \`Determinate\`. A Linear Progress component can be displayed as a query indeterminate progress
bar by adding the prop \`query={true}\` to the component. Until a progress value is given, it will
display the query linear progress animation. Afterwards, it will start the determinate animation
of where you manually keep updating the value of the progress.
`;

export default class LinearProgressDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Linear Progress"
        examples={[{
          name: 'Determinate Example',
          code: DeterminateExampleRaw,
          children: <DeterminateExample />,
        }, {
          name: 'Indeterminate Example',
          code: IndeterminateExampleRaw,
          children: <IndeterminateExample />,
        }, {
          name: 'Query Indeterminate Example',
          code: QueryIndeterminateExampleRaw,
          children: <QueryIndeterminateExample />,
        }]}
        components={[{
          name: 'LinearProgress',
          props: [{
            name: 'query',
            desc: 'Boolean if the progress bar should be Query Indeterminate.',
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'value',
            desc: `The value for the current progress if this is a determinate
            progress bar.`,
            type: 'number',
          }],
        }]}
      />
    );
  }
}
