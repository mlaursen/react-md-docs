import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import CheckboxExamples from './CheckboxExamples';
import CheckboxExamplesRaw from '!!raw!./CheckboxExamples';

const text = `
Checkboxes allow the user to select multiple options from a set.

If you have multiple options appearing in a list, you can preserve space by using
checkboxes instead of on/off switches.

If you have a single option, avoid using a checkbox and use an on/off switch instead.

Checkboxes can be toggle by clicking the label of the checkbox or the checkbox itself.
If the icon itself is clicked, ink will appear. There will be no ink when the label
is clicked.
`;

export default class CheckboxDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Checkboxes"
        examples={[{
          code: CheckboxExamplesRaw,
          children: <CheckboxExamples />,
        }]}
        components={[{
          name: 'Checkbox',
          props: [{
            name: 'label',
            desc: 'An optional label to display with the checkbox.',
            type: 'node',
          }, {
            name: 'labelBefore',
            desc: `Boolean if the label should appear before the checkbox.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'disabled',
            desc: `Boolean if the checkbox is disabled.`,
            type: 'bool',
          }, {
            name: 'defaultChecked',
            desc: `Boolean if the checkbox is checked by default.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'checked',
            desc: `Boolean if the checkbox is checked. This makes the checkbox
            a controlled component and requires the onChange function. You will
            only get the current event with this function. So if this gets triggered,
            you will manually have to inverse the checked state yourself.`,
            type: 'bool',
          }, {
            name: 'onChange',
            desc: `An optional onChange function to call.`,
            type: 'func',
          }, {
            name: 'checkedIcon',
            desc: `The FontIcon to use for the checked indicator.`,
            type: 'node',
            required: true,
            defaultValue: '<FontIcon>check_box</FontIcon>',
          }, {
            name: 'uncheckedIcon',
            desc: `The FontIcon to use for the unchecked indicator.`,
            type: 'node',
            required: true,
            defaultValue: '<FontIcon>check_box_outline_blank</FontIcon>',
          }],
        }]}
      />
    );
  }
}
