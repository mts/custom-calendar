import React from 'react';
import {object, arrayOf, string} from 'prop-types';
import './CalendarView.scss';

const CalendarView = ({dates, dayNames, dayNumbers}) => {
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
  dates: object,
  dayNames: arrayOf(string)
};

export default CalendarView;
