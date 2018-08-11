import React from 'react';
import CalendarView from '../Molecules/CalendarView';
import {getDisplayDays} from '../../utility/calendar';

const today = {
  year: 2018,
  monthOfYear: 8,
  dateOfTheMonth: 7,
};

const Calendar = () => <CalendarView displayDays={getDisplayDays(today)} />;

export default Calendar;
