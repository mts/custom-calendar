import React from 'react';
import {shape, object, arrayOf, string, number} from 'prop-types';
import './CalendarView.scss';

const CalendarView = ({currentYearDates, dayNames, dayNumbers}) => {
  return (
    <div className="calendar-view">
      {dayNames.map((dayName) => (
        <span key={dayName} className="calendar-view__day">{dayName}</span>
      ))}
      {dayNumbers.map((dayNumber) => (
        <span key={dayNumber} className="calendar-view__day">{dayNumber}</span>
      ))}
    </div>
  );
}

CalendarView.propTypes = {
  today:shape({
    day: string,
    month: string,
    year: string
  }),
  currentYearDates: object,
  dayNames: arrayOf(string),
  dayNumbers: arrayOf(number)
};

export default CalendarView;
