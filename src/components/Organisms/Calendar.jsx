import React from 'react';
import CalendarView from '../Molecules/CalendarView';
import {getDisplayDays} from '../../utility/calendar';

const Calendar = () => {
  console.clear();

  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  const today = {
    year: 2018,
    monthOfYear: 8,
    dateOfTheMonth: 7,
  };

  return (
    <CalendarView
        dayNames={dayNames}
        today={today}
        displayDays={getDisplayDays(today)}
    />
  );
}

export default Calendar;
