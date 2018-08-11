import React from 'react';
import CalendarView from '../Molecules/Date/CalendarView';
import CalendarInput from '../Molecules/Date/CalendarInput';
import {getDisplayDays} from '../../utility/calendar';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDays: getDisplayDays(props.today),
      isViewOpen: true
    };
  }

  onChange = (day) => {
    this.setState({displayDays: getDisplayDays(day)});
  };

  toggleView = () => {
    this.setState({isViewOpen: !this.state.isViewOpen});
  };

  render() {
    const {displayDays, isViewOpen} = this.state;

    return (
      <div>
        <CalendarInput
          today={displayDays.find((day) => day.today === true)}
          toggleView={this.toggleView}
        />
        {isViewOpen ? (
          <CalendarView
            displayDays={displayDays}
            onChange={this.onChange}
          />
        ) : null}
      </div>
    )
  };

};

export default Calendar;
