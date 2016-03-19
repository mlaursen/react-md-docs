import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import about from '../../../markdown/NavigationDrawers';
import AppRaw from '!!raw!../../containers/App';
import NavigationDrawerDemo from './NavigationDrawerDemo';

export default class NavigationDrawerDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={about}
        sectionName="Navigation Drawers"
        examples={[{
          name: 'About Navigation Drawers',
          code: AppRaw,
          children: <NavigationDrawerDemo />,
        }]}
        components={[{
          name: 'Navigation Drawers',
          props: [{
            name: 'isOpen',
            desc: 'Boolean if the navigation drawer is open and visible.',
            type: 'bool',
            required: true,
          }, {
            name: 'title',
            desc: `An optional title to display in the navigation drawer header.`,
            type: 'string',
          }, {
            name: 'toolbarTitle',
            desc: `An optional title to display in the main toolbar (app bar).`,
            type: 'string',
          }, {
            name: 'toolbarChildren',
            desc: `Any optional children to display in the main toolbar (app bar).`,
            type: 'node',
          }, {
            name: 'navItems',
            desc: `The list of components or props to generate the navigation list items
            in the navigation drawer. You can create a \`Divider\` component by adding
            an object of \`{ divider: true, ...props }\`, a \`Subheader\` component by
            adding an object of \`{ subheader: true, ...props }\` and a \`ListItem\`
            component by default that uses any props the \`ListItem\` component does.`,
            type: 'arrayOf(node || props)',
            required: true,
          }, {
            name: 'drawerType',
            desc: `One of the 7 drawer types to use for desktop. The media queries
            will automatically choose the temporary version by default for mobile
            devices unless you select a \`PERSISTENT_MINI\` or \`TEMPORARY_MINI\`.
            See above for the 7 types.`,
            type: 'oneOf(NavigationDrawer.DrawerType)',
            defaultValue: 'FULL_HEIGHT',
          }, {
            name: 'openDrawer',
            desc: `A function to call to open the drawer for the drawer types
            that can open and close.`,
            type: 'func',
          }, {
            name: 'closeDrawer',
            desc: `A function to call to close the drawer for the drawer types
            that can open and close.`,
            type: 'func',
          }, {
            name: 'navHeader',
            desc: `An optional header to use for the navigation drawer. This
            can be any renderable node. This is mostly if you want to
            be able to create the mobile version of the navigation drawer that
            has avatars and actions and stuff.`,
            type: 'node',
          }, {
            name: 'navHeaderChildren',
            desc: `Any optional children to display in the automatically generated
            navigation drawer header.`,
            type: 'node',
          }, {
            name: 'className',
            desc: `The class name to apply to the navigation drawer.`,
            type: 'string',
          }, {
            name: 'contentClassName',
            desc: `The optional className to apply to the main page content
            container.`,
            type: 'string',
          }, {
            name: 'toolbarClassname',
            desc: `The optional className to add to the main page toolbar (app bar).`,
            type: 'string',
          }, {
            name: 'menuIconChildren',
            desc: `Any children used for the menu icon button.`,
            type: 'node',
            defaultValue: 'menu',
          }, {
            name: 'menuIconClassName',
            desc: `The icon className to use for the menu icon button.`,
            type: 'string',
            defaultValue: 'material-icons',
          }, {
            name: 'closeIconChildren',
            desc: `Any children used for the close menu icon button.`,
            type: 'node',
            defaultValue: 'keyboard_arrow_left',
          }, {
            name: 'closeIconClassName',
            desc: `The icon className to use for the close menu icon button.`,
            type: 'string',
            defaultValue: 'material-icons',
          }],
        }]}
      />
    );
  }
}
