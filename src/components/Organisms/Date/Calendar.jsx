import React from 'react';
import {shape} from 'prop-types';
import CalendarView from '../../Molecules/Date/CalendarView';
import CalendarInput from '../../Molecules/Date/CalendarInput';
import {getDisplayDays} from '../../../utility/calendar';
import {dayShape} from '../../../data/shape';

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

Calendar.propTypes = {
  today: shape(dayShape).isRequired
};

export default Calendar;

/*
`Calendar` is a
  statefull class component
  receiving `today` prop
`rendering`
  a CalendarInput and a CalendarView components

`handling`
  a number of events via onChange() and toggleView() functions
  both setting internal state

Sample usages are as follows:
```javascript
  <Calendar
    today={{
      year: 2018,
      monthOfYear: 8,
      dateOfTheMonth: 7,
    }}
  />
```
*/
