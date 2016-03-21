import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import MenuExamples from './MenuExamples';
import MenuExamplesRaw from '!!raw!./MenuExamples';
import ToggleableMenuExamlples from './ToggleableMenuExamlples';
import ToggleableMenuExamlplesRaw from '!!raw!./ToggleableMenuExamlples';

const text = `
Menus allow users to take an action by selecting from a list of choices revealed upon opening a temporary, new sheet of material.
`;

export default class MenuDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Menus"
        examples={[{
          name: 'Static Examples',
          code: MenuExamplesRaw,
          children: <MenuExamples />,
        }, {
          name: 'Button Toggleable Menus',
          code: ToggleableMenuExamlplesRaw,
          children: <ToggleableMenuExamlples />,
        }]}
        components={[{
          name: 'Menu',
          props: [{
            name: 'toggle',
            desc: `Any component that will toggle the menu's visibility.`,
            type: 'node',
          }, {
            name: 'children',
            desc: `An \`ListItem\` components to be rendered in the menu when it is open.`,
            type: 'node',
          }, {
            name: 'isOpen',
            desc: `Boolean if the menu is currently open and visible.`,
            type: 'bool',
            required: true,
          }, {
            name: 'close',
            desc: `A function to call to close the menu. This will allow the menu to be closed
            when an area outside of the menu has been clicked/touched.`,
            type: 'func',
          }, {
            name: 'autoclose',
            desc: `Boolean if the menu should autoclose when any of the \`ListItem\` are clicked. This will
            update each \`ListItem\` to call the \`close\` function as well as whatever the \`ListItem\` \`onClick\`
            function was.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'position',
            desc: `The position that the menu should appear from.`,
            type: 'oneOf({ TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT } = Menu.Positions)',
            defaultValue: 'Menu.Positions.TOP_LEFT',
          }, {
            name: 'below',
            desc: `Boolean if the menu should appear below the toggle instead of relataive to it.`,
            type: 'bool',
          }, {
            name: 'cascading',
            desc: `Boolean if there are any nested items in the menu items. This _should_ update the
            nested lists to have the correct box shadow and position them where there is enough screen space.`,
            type: 'bool',
          }, {
            name: 'listClassName',
            desc: `An optional className to apply to the \`List\` component in the \`Menu\`.`,
            type: 'string',
          }, {
            name: 'minWidth',
            desc: `The min width to scale the menu item to.`,
            type: 'oneOf(1.5, 2, 3, 6, 7)',
          }, {
            name: 'expanderIconChildren',
            desc: `Any children to use to display the expander icon.`,
            type: 'node',
            defaultValue: 'keyboard_arrow_right',
          }, {
            name: 'expanderIconClassName',
            desc: `The icon className to use for the expander icon.`,
            type: 'string',
            defaultValue: 'material-icons',
          }],
        }]}
      />
    );
  }
}
