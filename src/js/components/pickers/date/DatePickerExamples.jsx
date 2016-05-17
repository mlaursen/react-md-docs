import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DatePicker } from 'react-md/lib/Pickers';
import { connect } from 'react-redux';

import { addToast, dismissToast } from '../../../actions/docs';

/*eslint-env node*/
if(!global.Intl) {
  require.ensure([], require => {
    require('intl');
    require('intl/locale-data/jsonp/en-US');
    require('intl/locale-data/jsonp/da-DK');
  });
}

const today = new Date();
const twoMonthsAgo = new Date(new Date().setMonth(today.getMonth() - 2));
const oneYearFuture = new Date(new Date().setYear(today.getFullYear() + 1));

@connect(() => ({}), {
  addToast,
  dismissToast,
})
export default class DatePickerExamples extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = { formattedDate: '', date: null };
  }

  static propTypes = {
    addToast: PropTypes.func.isRequired,
    dismissToast: PropTypes.func.isRequired,
  };

  componentWillUpdate(nextProps, nextState) {
    const { date, formattedDate } = this.state;
    if(date !== nextState.date && !nextState.undo) {
      nextProps.addToast({
        text: `You have set our appointment date to ${nextState.formattedDate}`,
        action: {
          label: 'Undo',
          onClick: () => {
            this.props.dismissToast();
            this.undo(date, formattedDate);
          },
        },
      });
    }
  }

  handleDateChange = (formattedDate, date) => {
    this.setState({ formattedDate, date, undo: false });
  };

  undo = (date, formattedDate) => {
    this.setState({ date, formattedDate, undo: true });
  };

  render() {
    return (
      <div>
        <div>
          <p>
            Date pickers will attempt to follow the correct display mode of the current
            screen size through the media queries. You can also force a display mode if
            you want.
          </p>
          <DatePicker label="Select an appointment time" floatingLabel={false} />
          <DatePicker label="Portrait Mode" displayMode="portrait" />
          <DatePicker label="Landscape Mode" displayMode="landscape" />
        </div>
        <div>
          <p>
            Date pickers will also use the browser's locale by default to format the time.
            You can also manually force a locale.
          </p>
          <DatePicker label="Select a date" defaultValue={today} />
          <DatePicker label="Vælg en aftale dato" locales="da-DK" defaultValue={today} />
        </div>
        <div>
          <p>You can also allow a date picker to appear inline if you desire</p>
          <DatePicker label="Select a time" inline={true} />
        </div>
        <div>
          <p>A date picker can have min and max dates.</p>
          <DatePicker
            label="Auto OK"
            autoOk={true}
            defaultValue={today}
            minDate={twoMonthsAgo}
          />
          <DatePicker
            label="Min and max dates"
            minDate={twoMonthsAgo}
            maxDate={oneYearFuture}
          />
        </div>
        <div>
          <p>
            A date picker can be controlled as well. The <code>onChange</code> function will only
            be triggered when the user hits the OK button.
          </p>
          <DatePicker
            label="Select your appointment time"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </div>
      </div>
    );
  }
}
