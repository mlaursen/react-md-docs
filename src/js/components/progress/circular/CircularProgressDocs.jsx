import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import DeterminateExample from './DeterminateExample';
import DeterminateExampleRaw from '!!raw!./DeterminateExample';
import IndeterminateExample from './IndeterminateExample';
import IndeterminateExampleRaw from '!!raw!./IndeterminateExample';

import CircularProgress from './CircularProgressDocgen.json';

const text = `
Minimize visual changes that occur while your app loads content by representing each operation
with a single activity indicator. For example, a refresh operation should display either a
refresh bar or an activity circle, but not both.
`;

export default class CircularProgressDocs extends Component {
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
        sectionName="Circular Progress"
        examples={[{
          name: 'Determinate Example',
          code: DeterminateExampleRaw,
          children: <DeterminateExample />,
        }, {
          name: 'Indeterminate Example',
          code: IndeterminateExampleRaw,
          children: <IndeterminateExample />,
        }]}
        docgens={CircularProgress}
      />
    );
  }
}
