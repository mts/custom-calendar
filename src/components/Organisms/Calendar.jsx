import React from 'react';
import CalendarView from '../Molecules/Date/CalendarView';
import {getDisplayDays} from '../../utility/calendar';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDays: getDisplayDays({
        year: 2018,
        monthOfYear: 8,
        dateOfTheMonth: 7,
      })
    };
  }

  onChange = (day) => {
    this.setState({displayDays: getDisplayDays(day)});
  };

  render() {
    return (
      <CalendarView
        displayDays={this.state.displayDays}
        onChange={this.onChange}
      />
    )
  };

};

export default Calendar;
