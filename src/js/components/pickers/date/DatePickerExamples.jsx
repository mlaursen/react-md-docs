import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DatePicker } from 'react-md/lib/Pickers';

const today = new Date();
const twoMonthsAgo = new Date(today.setMonth(today.getMonth() - 2));
const oneYearFuture = new Date(today.setYear(today.getFullYear() + 1));

export default class DatePickerExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <DatePicker label="Select a date" floatingLabel={false} />
        <DatePicker label="Vælg en aftale dato" locales="en-DK" />
        <DatePicker
          label="Auto OK"
          autoOk={true}
          defaultValue={today}
        />
        <DatePicker
          label="Min and max dates"
          minDate={twoMonthsAgo}
          maxDate={oneYearFuture}
        />
        <DatePicker label="Potrait mode" displayMode="portrait" />
        <DatePicker inline={true} label="Inline" floatingLabel={false} />
        <DatePicker inline={true} label="Inline portrait" displayMode="portrait" floatingLabel={false} />
      </div>
    );
  }
}
