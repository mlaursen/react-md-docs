import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import ToolbarExamples from './ToolbarExamples';
import ToolbarExamplesRaw from '!!raw!./ToolbarExamples';
//import FakeTextEditorExample from './FakeTextEditorExample';
//import FakeTextEditorExampleRaw from '!!raw!./FakeTextEditorExample';
import ToolbarWithTabsExample from './ToolbarWithTabsExample';
import ToolbarWithTabsExampleRaw from '!!raw!./ToolbarWithTabsExample';
import Toolbar from '!!json!docgen/Toolbar.json';

const text = `
A toolbar is a container that has an optional title and 1 to many actionable areas.

A toolbar can be used if you do not want to use the \`NavigationDrawer\` component that
has this built in.
`;

export default class ToolbarDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Toolbars"
        examples={[{
          name: 'Simple Example',
          code: ToolbarExamplesRaw,
          children: <ToolbarExamples />,
          //}, {
          //name: 'With desktop controls',
          //code: FakeTextEditorExampleRaw,
          //children: <FakeTextEditorExample />,
        }, {
          name: 'With Tabs',
          code: ToolbarWithTabsExampleRaw,
          children: <ToolbarWithTabsExample />,
        }]}
        docgens={[Toolbar]}
      />
    );
  }
}
