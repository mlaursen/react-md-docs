import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import ToolbarExamples from './ToolbarExamples';
import ToolbarExamplesRaw from '!!raw!./ToolbarExamples';
//import FakeTextEditorExample from './FakeTextEditorExample';
//import FakeTextEditorExampleRaw from '!!raw!./FakeTextEditorExample';
import ToolbarWithTabsExample from './ToolbarWithTabsExample';
import ToolbarWithTabsExampleRaw from '!!raw!./ToolbarWithTabsExample';

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
        components={[{
          name: 'Toolbar',
          props: [{
            name: 'primary',
            desc: 'Boolean if the toolbar should be styled with the primary color.',
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'actionLeft',
            desc: `Some actionable item that is to the left of the title. This is usually an icon button.`,
            type: 'node',
          }, {
            name: 'title',
            desc: `An optional title to display in the toolbar.`,
            type: 'string',
          }, {
            name: 'actionsRight',
            desc: `Any node to display to the right of the title.`,
            type: 'node',
          }, {
            name: 'fixed',
            desc: `Boolean if the toolbar is fixed to the top of the page.`,
            type: 'bool',
          }, {
            name: 'children',
            desc: `Any children to display in the toolbar. This should really just be a tabs component.`,
            type: 'node',
          }, {
            name: 'containerClassName',
            desc: `The optional className to apply to the container`,
            type: 'string',
          }],
        }]}
      />
    );
  }
}
