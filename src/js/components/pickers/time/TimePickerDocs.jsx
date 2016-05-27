import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import TimePickerExamples from './TimePickerExamples';
import TimePickerExamplesRaw from '!!raw!./TimePickerExamples';
import TimePicker from 'docgen/TimePicker.json';
TimePicker.props.DateTimeFormat.defaultValue = {
  computed: false,
  value: `Intl.DateTimeFormat || (locales, options) => { format: date => date }`,
};

const text = `
Pickers provide a simple way to select a single value from a pre-determined set.
Time pickers should be formatted to the user's locale.
`;

export default class TimePickerDocs extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <DocPage
        {...this.props}
        text={text}
        sectionName="Time Pickers"
        examples={[{
          code: TimePickerExamplesRaw,
          children: <TimePickerExamples />,
        }]}
        docgens={[TimePicker]}
      />
    );
  }
}
