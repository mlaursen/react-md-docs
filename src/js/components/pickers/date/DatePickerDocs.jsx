import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import DatePickerExamples from './DatePickerExamples';
import DatePickerExamplesRaw from '!!raw!./DatePickerExamples';
import DatePicker from 'docgen/DatePicker.json';
DatePicker.props.DateTimeFormat.defaultValue = {
  computed: false,
  value: `Intl.DateTimeFormat || (locales, options) => { format: date => date }`,
};

const text = `
Pickers provide a simple way to select a single value from a pre-determined set.
Date pickers should be formatted to the users's locale.
`;

export default class DatePickerDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Date Pickers"
        examples={[{
          code: DatePickerExamplesRaw,
          children: <DatePickerExamples />,
        }]}
        docgens={[DatePicker]}
      />
    );
  }
}
