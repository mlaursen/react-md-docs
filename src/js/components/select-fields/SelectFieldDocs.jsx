import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import SelectFieldExamples from './SelectFieldExamples';
import SelectFieldExamplesRaw from '!!raw!./SelectFieldExamples';
import SelectFieldButtonExamples from './SelectFieldButtonExamples';
import SelectFieldButtonExamplesRaw from '!!raw!./SelectFieldButtonExamples';

import SelectField from '!!json!docgen/SelectField.json';
global.SelectField = require('react-md/lib/SelectFields'); //eslint-disable-line no-undef

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
          name: 'Simple Examples',
          code: SelectFieldExamplesRaw,
          children: <SelectFieldExamples />,
        }, {
          name: 'Select Field Button Examples',
          code: SelectFieldButtonExamplesRaw,
          children: <SelectFieldButtonExamples />,
        }]}
        docgens={[SelectField]}
      />
    );
  }
}
