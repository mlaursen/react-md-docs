import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import DocPage from 'react-doc-page';
import SidebarExamples from './SidebarExamples';
import SidebarExamplesRaw from '!!raw!./SidebarExamples';
import ResponsiveSidebarExample from './ResponsiveSidebarExample';
import ResponsiveSidebarExampleRaw from '!!raw!./ResponsiveSidebarExample';

import Sidebar from './SidebarDocgen.json';

const text = `
The sidebar is responsive by default. This means that when it
matches whatever media query you have for mobile, the sidebar
will be displayed with an overlay and the sidebar will be the
top most element on the screen. If does not match the mobile
query, the sidebar will be displayed below a fixed toolbar.

The default behavior can be overridden by setting \`fixed={true} overlay={true}\`.
This will make the overlay always visible and the sidebar to always be the top most
element on the screen.

Since the sidebar is a fully controlled component, you must pass a function
that closes the sidebar to \`onOverlayClick\` if you want it to close when
the overlay is clicked.

The content in the sidebar can be created by passing a header, a list of items that
will be used to generate a \`List\` with \`ListItem\`/\`ListSubheader\`/\`Divider\`,
or by passing in children.
`;

export default class SidebarDocs extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Sidebars"
        examples={[{
          code: SidebarExamplesRaw,
          children: <SidebarExamples />,
        }, {
          name: 'Responsive Sidebar Example',
          code: ResponsiveSidebarExampleRaw,
          children: <ResponsiveSidebarExample />,
        }]}
        docgens={Sidebar}
      />
    );
  }
}
