import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SelectFieldExamples from './SelectFieldExamples';
import SelectFieldExamplesRaw from '!!raw!./SelectFieldExamples';

const text = `
A select field is called a Dropdown Button in the
[material design specs](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons).


A dropdown button selects between multiple selections. The button
displays the current state and a down arrow. Available states may
be shown as a list of strings, a palette, or icons, for example.

In \`react-md\`, Select Fields are an extension of the \`TextField\` component
with additional events to open the menu. The Select Field will automatically
update the text field's size to be the largest menu item's label.
`;

export default class SelectFieldDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Select Fields"
        examples={[{
          code: SelectFieldExamplesRaw,
          children: <SelectFieldExamples />,
        }]}
        components={[{
          name: 'SelectField',
          props: [{
            name: 'menuItems',
            desc: `A list of menu items to display once the select field is
            open. If the menu item is an object, you must give a correct \`itemLabel\`
            so that they can be displayed correctly.`,
            type: 'arrayOf(string || number || object)',
            required: true,
          }, {
            name: 'itemLabel',
            desc: `The object key to get the label for a menu item.`,
            type: 'string',
            defaultValue: 'label',
            required: true,
          }, {
            name: 'defaultValue',
            desc: `An optional defaultValue to set for the select field.`,
            type: 'oneOf(string || number)',
            defaultValue: '\'\'',
          }, {
            name: 'position',
            desc: `The position for the menu when it appears or where it should be located.
            Valid values are \`SelectField.Positions.TOP_RIGHT\`, \`SelectField.Positions.TOP_LEFT\`,
            or \`SelectField.Positions.BOTTOM\`.`,
            type: 'oneOf(TOP_LEFT, TOP_RIGHT, BOTTOM)',
            defaultValue: 'SelectField.Positions.TOP_LEFT',
          }, {
            name: 'label',
            desc: `The optional label/placeholder to display in the text field.`,
            type: 'string',
          }, {
            name: 'floatingLabel',
            desc: `Boolean if the label/placeholder should be a floating label.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'value',
            desc: `The value for the select field if you want to control this component.`,
            type: 'oneOf(string || number)',
          }, {
            name: 'onChange',
            desc: `A function to call when a value is selected. The callback is
            \`onChange(item, event)\`. The item will be the full item, so it could
            be an object, a number, or a string.`,
            type: 'func',
          }, {
            name: 'onClick',
            desc: `An optional function to call when the text field is clicked.`,
            type: 'func',
          }, {
            name: 'onKeyDown',
            desc: `An optional function to call when the text field is focused and the
            user types something in the keyboard.  Since the text field is read only,
            it probably won't do much. This is just used to allow the enter and spacebar
            keys to open the menu. (built in)`,
            type: 'func',
          }, {
            name: 'initiallyOpen',
            desc: `Boolean if the select field is initially open.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'noAutoAdjust',
            desc: `Boolean if the drop down menu shold not automatically attempt
            to change the top position to match a selected item. This should really
            just be used if the opened menu expands past the top of the screen.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'iconClassName',
            desc: `The className for the drop down icon.`,
            type: 'string',
            defaultValue: 'material-icons',
          }, {
            name: 'iconChildren',
            desc: `Optional children to use to display the drop down icon.`,
            type: 'node',
            defaultValue: 'arrow_drop_down',
          }, {
            name: 'listClassName',
            desc: `The optional className to apply the the drop down list.`,
            type: 'string',
          }, {
            name: 'menuClassName',
            desc: `The optional className to apply to the main menu wrapper.`,
            type: 'string',
          }],
        }]}
      />
    );
  }
}
