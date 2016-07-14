import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import TabExamples from './TabExamples';
import TabExamplesRaw from '!!raw!./TabExamples';
import TabInToolbarExample from './TabInToolbarExample';
import TabInToolbarExampleRaw from '!!raw!./TabInToolbarExample';

import Tabs from './TabDocgen.json';

const text = `
Tabs make it easy to explore and switch between different views or functional aspects of an app or to browse categorized data sets.
`;

export default class TabDocs extends Component {
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
        sectionName="Tabs"
        examples={[{
          code: TabExamplesRaw,
          children: <TabExamples />,
        }, {
          name: 'Tabs in Toolbar Example',
          code: TabInToolbarExampleRaw,
          children: <TabInToolbarExample />,
        }]}
        docgens={Tabs}
      />
    );
  }
}
