import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DocPage from 'react-doc-page';
import TimePickerExamples from './TimePickerExamples';
import TimePickerExamplesRaw from '!!raw!./TimePickerExamples';

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
        components={[{
          name: 'TimePicker',
          props: [{
            name: 'DateTimeFormat',
            desc: `This should be the \`Intl.DateTimeFormat\` or your own
            version of a date time format. (Why?!). This is used to format
            the dates using the user's locale. If you don't care about Safari,
            the polyfill is not needed. You can see [intl-polyfill](https://github.com/andyearnshaw/Intl.js/)
            for more information.`,
            type: 'func',
            required: true,
            defaultValue: 'Intl.DateTimeFormat',
          }, {
            name: 'locales',
            desc: `The locales to use for the date formatter. It will use the
            browser's default locale by default.`,
            type: 'oneOfType(string, arrayOf(string))',
            defaultValue: 'window.navigator.userLanguage || window.navigator.language',
          }, {
            name: 'label',
            desc: `The label/placeholder to display in the text field.`,
            type: 'string',
          }, {
            name: 'floatingLabel',
            desc: `Boolean if the label is a floating text field label.`,
            type: 'bool',
          }, {
            name: 'defaultValue',
            desc: `The default value for the text field. The value
            should either be a string that can be converted to a date
            by \`new Date(defaultValue)\` or a \`Date\` object.`,
            type: 'oneOfType(Date || string)',
          }, {
            name: 'value',
            desc: `The value of the time picker. This is used if you want a
            controlled time picker.`,
            type: 'oneOfType(Date || string)',
          }, {
            name: 'onChange',
            desc: `An optional function to call when the selected time's value
            changes. This happens when the user hits the OK button or when
            the time changes and \`autoOk={true}\`.`,
            type: 'func',
          }, {
            name: 'initialTimeMode',
            desc: `The mode to start the visible time picker in.`,
            type: `one('hour', 'minute')`,
            defaultValue: 'hour',
          }, {
            name: 'displayMode',
            desc: `An optional display mode to force the time picker to appear.
            It is recommended to not use this prop, but update the media queries if
            it does not display correctly on a certain device.`,
            type: `one('landscape', 'portrait')`,
          }, {
            name: 'autoOk',
            desc: `Boolean if the time picker should select a time and close
            the dialog when a new time is selected.`,
            type: 'bool',
            defaultValue: false,
          }, {
            name: 'okLabel',
            desc: `The label for the OK button.`,
            type: 'string',
            defaultValue: 'Ok',
          }, {
            name: 'okPrimary',
            desc: `Boolean if the OK button should be styled with the primary
            color.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'cancelLabel',
            desc: `The label for the cancel button.`,
            type: 'string',
            defaultValue: 'Cancel',
          }, {
            name: 'cancelPrimary',
            desc: `Boolean if the cancel button should be styled with the primary
            color.`,
            type: 'bool',
            defaultValue: true,
          }, {
            name: 'inline',
            desc: `Boolean if the time picker should be displayed inline. This
            should only ever be used on desktop and it probably isn't even
            what the docs had in mind when they said inline.`,
            type: 'bool',
          }, {
            name: 'icon',
            desc: `The icon to display for the time picker. This is actually optional.`,
            type: 'node',
            defaultValue: '<FontIcon>access_time</FontIcon>',
          }],
        }]}
      />
    );
  }
}
