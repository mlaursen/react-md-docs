import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import UncontrolledRadioExample from './UncontrolledRadioExample';
import UncontrolledRadioExampleRaw from '!!raw!./UncontrolledRadioExample';
import ControlledRadioExample from './ControlledRadioExample';
import ControlledRadioExampleRaw from '!!raw!./ControlledRadioExample';

const text = `
Radio buttons allow the user to select one option from a set. Use radio buttons
for exclusive selection if you think that the user needs to see all available options
side-by-side.

Otherwise, consider a dropdown, which uses less space than displaying all options.

There are two components in the \`react-md\` library. There is a helper comonent:
\`RadioGroup\` and the  main component \`Radio\`.

The \`RadioGroup\` component
manages the state for you of all the radio components inside. It also
automatically adds the radio group name to all radios and an \`onChange\` function.
`;

export default class RadioDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Radio Fields"
        examples={[{
          name: 'Uncontrolled Example',
          code: UncontrolledRadioExampleRaw,
          children: <UncontrolledRadioExample />,
        }, {
          name: 'Controlled Example',
          code: ControlledRadioExampleRaw,
          children: <ControlledRadioExample />,
        }]}
        components={[{
          name: 'RadioGroup',
          props: [{
            name: 'name',
            desc: 'The radio group name to use for all children.',
            type: 'string',
          }, {
            name: 'children',
            desc: `The list of radio component to inject the name and onChange
            funtion into.`,
            type: 'arrayOf(node)',
          }, {
            name: 'defaultValue',
            desc: `The default value that should be checked in the radio group.`,
            type: 'string',
            defaultValue: 'first radio button value',
          }, {
            name: 'disabled',
            desc: `Boolean if all the radio components are disabled.`,
            type: 'bool',
          }, {
            name: 'component',
            desc: `The component to render the radio group as.`,
            type: 'string',
            defaultValue: 'div',
            required: true,
          }, {
            name: 'inline',
            desc: `Boolean if the radio components should be displayed inline.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'value',
            desc: `An optional value for the radio group. This is used to make a controlled
            component. It will check the Radio component that has the same value.`,
            type: 'string',
          }, {
            name: 'onChange',
            desc: `An optional function to call when a new radio button is clicked.`,
            type: 'func',
          }],
        }, {
          name: 'Radio',
          props: [{
            name: 'label',
            desc: 'The label for the radio.',
            type: 'string',
          }, {
            name: 'labelBefore',
            desc: `Boolean if the label should appear before the radio button.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'value',
            desc: `The value for the radio component.`,
            type: 'string || number',
            required: true,
          }, {
            name: 'name',
            desc: `The name of the radio group. This should be injected automatically
            by the radio group component.`,
            type: 'string',
            required: true,
          }, {
            name: 'checked',
            desc: `Boolean if the radio button is checked. This should be handled
            automatically by the Radio Group component.`,
            type: 'bool',
          }, {
            name: 'defaultChecked',
            desc: `Boolean if the radio should be checked by default. This is if you
            are not using the RadioGroup component.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'onChange',
            desc: `A function to call when the rando button's checked state changes.`,
            type: 'func',
            required: true,
          }, {
            name: 'checkedIcon',
            desc: `The icon to use when the radio button is checked.`,
            type: 'node',
            required: true,
            defaultValue: '<FontIcon>radio_button_checked</FontIcon>',
          }, {
            name: 'uncheckedIcon',
            desc: `The icon to use when the radio button is unchecked.`,
            type: 'node',
            required: true,
            defaultValue: '<FontIcon>radio_button_unchecked</FontIcon>',
          }],
        }]}
      />
    );
  }
}
