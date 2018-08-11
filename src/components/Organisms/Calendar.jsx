import React from 'react';
import CalendarView from '../Molecules/Date/CalendarView';
import {getDisplayDays} from '../../utility/calendar';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: {
        year: 2018,
        monthOfYear: 8,
        dateOfTheMonth: 7,
      }
    }
  }

  onChange = (day) => {
    this.setState({today: day});
  };

  render() {
    return (
      <CalendarView
        displayDays={getDisplayDays(this.state.today)}
        onChange={this.onChange}
      />
    )
  };

};

export default Calendar;
