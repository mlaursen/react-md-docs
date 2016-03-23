import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SidebarExamples from './SidebarExamples';
import SidebarExamplesRaw from '!!raw!./SidebarExamples';

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

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
        }]}
        components={[{
          name: 'Sidebar',
          props: [{
            name: 'isOpen',
            desc: `Boolean if the sidebar is currently open.`,
            type: 'bool',
            required: true,
          }, {
            name: 'items',
            desc: `This is an array of properties to use to generate
            a list of items for the sidebar. If an item has the prop \`divider\`
            set to true, it will use the \`Divider\` component and
            any remaining props. If the \`subheader\` prop is set to true,
            it will use the \`ListSubheader\` component and pass any
            remaining props to that component. Finally, it will use the
            \`ListItem\` component and pass all props to it.`,
            type: 'arrayOf(...props)',
          }, {
            name: 'children',
            desc: `Any children you want to be displayed after the \`items\``,
            type: 'node',
          }, {
            name: 'responsive',
            desc: 'Boolean if the sidebar should be responsive.',
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'fixed',
            desc: `Boolean if the sidebar is fixed to the page.`,
            type: 'bool',
          }, {
            name: 'overlay',
            desc: `boolean if the overlay should be included. (It is included
            automatically if it is responsive and open.)`,
            type: 'bool',
          }, {
            name: 'align',
            desc: `The side of the screen the Sidebar should be fixed to.`,
            type: 'oneOf(\'left\', \'right\')',
            defaultValue: 'left',
            required: true,
          }, {
            name: 'onOverlayClick',
            desc: `An optional function to call when the overlay is clicked. You
            must this function with a close ability if you want the user to
            be able to close the sidebar on overlay click.`,
            type: 'func',
          }, {
            name: 'transitionName',
            desc: `The overlay transition name.`,
            type: 'string',
            defaultValue: 'md-overlay',
          }, {
            name: 'transitionEnterTimeout',
            desc: `The timeout for the overlay entering.`,
            type: 'number',
            defaultValue: 150,
            required: true,
          }, {
            name: 'transitionLeaveTimeout',
            desc: `The timeout for the overlay leaving.`,
            type: 'number',
            defaultValue: 150,
            required: true,
          }, {
            name: 'header',
            desc: `An optional header to include in the sidebar.`,
            type: 'node',
          }],
        }]}
      />
    );
  }
}
