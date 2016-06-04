import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import DeterminateExample from './DeterminateExample';
import DeterminateExampleRaw from '!!raw!./DeterminateExample';
import IndeterminateExample from './IndeterminateExample';
import IndeterminateExampleRaw from '!!raw!./IndeterminateExample';
import QueryIndeterminateExample from './QueryIndeterminateExample';
import QueryIndeterminateExampleRaw from '!!raw!./QueryIndeterminateExample';

import LinearProgress from './LinearProgressDocgen.json';

const text = `
Minimize visual changes that occur while your app loads content by representing each operation
with a single activity indicator. For example, a refresh operation should display either a
refresh bar or an activity circle, but not both.
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
        docgens={LinearProgress}
      />
    );
  }
}
