import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import FloatingLabelExamples from './FloatingLabelExamples';
import FloatingLabelExamplesRaw from '!!raw!./FloatingLabelExamples';
import SingleLineExamples from './SingleLineExamples';
import SingleLineExamplesRaw from '!!raw!./SingleLineExamples';
import StatefulExamples from './StatefulExamples';
import StatefulExamplesRaw from '!!raw!./StatefulExamples';
import InfoExamples from './InfoExamples';
import InfoExamplesRaw from '!!raw!./InfoExamples';
import FullWidthExamples from './FullWidthExamples';
import FullWidthExamplesRaw from '!!raw!./FullWidthExamples';
import InToolbarExample from './InToolbarExample';
import InToolbarExampleRaw from '!!raw!./InToolbarExample';

const text = `
Text fields allow the user to input text, select text, and lookup data via auto-completion.

Text fields are required to have a label by default. This label can either be displayed as
a floating label (moves above the text field when text or focus), or a placeholder text.

A text field can be converted into a multiline text field by specifying the the prop rows.
This will be the initial amount of rows to display for the multiline text field. This will
auto expand until it reaches the maxRows value. If you set \`maxRows={-1}\`, it will expand
indefinitely.

There is also an additional css class you can add to the text field to increase the font
size to a "title". This is configurable and there is a mixin to generate more of these helpers.

Text Fields display as \`inline-block\` by default so that their size does not span \`100%\`. If
you want a text field per-line, wrap them in a div, or set them to display block (will make their width
expand as well though).
`;

export default class TextFieldDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Text Fields"
        examples={[{
          name: 'Floating Label Examples',
          code: FloatingLabelExamplesRaw,
          children: <FloatingLabelExamples />,
        }, {
          name: 'Single Line Label Examples',
          code: SingleLineExamplesRaw,
          children: <SingleLineExamples />,
        }, {
          name: 'With Icons / Stateful Examples',
          code: StatefulExamplesRaw,
          children: <StatefulExamples />,
        }, {
          name: 'With Info/Error Text',
          code: InfoExamplesRaw,
          children: <InfoExamples />,
        }, {
          name: 'Full Width Examples',
          code: FullWidthExamplesRaw,
          children: <FullWidthExamples />,
        }, {
          name: 'In Toolbars',
          code: InToolbarExampleRaw,
          children: <InToolbarExample />,
        }]}
        components={[{
          name: 'TextField',
          props: [{
            name: 'label',
            desc: `A label to display with the text field. If the text field is a single-line
            text field, this will automatically be set to be the placeholder if a placeholder
            does not exist.`,
            type: 'string',
          }, {
            name: 'placeholder',
            desc: `An optional placeholder to display along with a floating label.`,
            type: 'string',
          }, {
            name: 'floatingLabel',
            desc: `Boolean if the label should be a floating label or a single-line.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'type',
            desc: `The text field type. This should be one of the valid html5 input types.

> Note: If this is a multi-line text field, this prop will not be used because
> the input tag will get changed into a \`textarea\`
            `,
            type: 'string',
            required: true,
            defaultValue: 'text',
          }, {
            name: 'rows',
            desc: `The number of rows to display by default. This converts the text field
            into a multiline text field.`,
            type: 'number',
          }, {
            name: 'maxRows',
            desc: `The maximum number of rows that can be displayed for the multiline text field.
            The text field will continue to expand in height until this value is met. If you set
            this to \`-1\`, it will expand infinitely.`,
            type: 'number',
          }, {
            name: 'required',
            desc: `Boolean if the text field is required. The '*' will automatically be added
            for the floating label text fields.`,
            type: 'bool',
          }, {
            name: 'disabled',
            desc: `Boolean if the text field is disabled.`,
            type: 'bool',
          }, {
            name: 'fullWidth',
            desc: `Boolean if the text field is full-width. Floating labels will automatically be
            disbaled if this is set to true.`,
            type: 'bool',
          }, {
            name: 'lineDirection',
            desc: `The direction that the focus indicator should expand from.`,
            type: `oneOf('left', 'center', 'right')`,
            defaultValue: 'left',
          }, {
            name: 'icon',
            desc: `An optional icon to display to the left of the text field. The user can click
            on the icon to focus on the text field.`,
            type: 'node',
          }, {
            name: 'rightIcon',
            desc: `An optional icon to display to the right of the text field. This should really
            only be used with dropdowns.`,
            type: 'node',
          }, {
            name: 'helpText',
            desc: `An optional help text to display below the text field.`,
            type: 'string',
          }, {
            name: 'helpOnFocus',
            desc: `Boolean if the help text should only appear when the text field is focused.`,
            type: 'bool',
          }, {
            name: 'errorText',
            desc: `An optional error text to display below the text field. If this value is a non-falsey
            value, it will style any icons, labels, and the focus indicator with the error color.`,
            type: 'string',
          }, {
            name: 'maxLength',
            desc: `The max length for the text field. This will automatically add a counter to the
            text field.`,
            type: 'number',
          }, {
            name: 'defaultValue',
            desc: `An optional default value for the text field.`,
            type: 'string',
            handleFocus: `''`,
          }, {
            name: 'value',
            desc: `An optional value to set the text field with. This forces the text field to
            be a controlled component.`,
            type: 'string',
          }, {
            name: 'onChange',
            desc: `An optional function to call when the text field's value has changed. The callback
            is defined as \`onChange(newValue, event)\`.`,
            type: 'func',
          }, {
            name: 'containerClassName',
            desc: `An optional className to apply to the text field's container.`,
            type: 'string',
          }],
        }]}
      />
    );
  }
}
