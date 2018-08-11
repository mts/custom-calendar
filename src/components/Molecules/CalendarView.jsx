import React from 'react';
import {shape, arrayOf, string, number} from 'prop-types';
import './CalendarView.scss';

const dateShape = shape({
  day: number,
  month: number,
  year: number
});

const CalendarView = ({dayNames, today, displayDays}) => {
  return (
    <div className="calendar-view">
      {dayNames.map((dayName) => (
        <span
          key={dayName}
          className="calendar-view__day">
            {dayName}
        </span>
      ))}
      {displayDays.map((date, index) => (
        <span
          key={index}
          className="calendar-view__day">
            {date.dateOfTheMonth}
        </span>
      ))}
    </div>
  );
}

CalendarView.propTypes = {
  dayNames: arrayOf(string).isRequired,
  today: dateShape.isRequired,
  displayDays: arrayOf(
    shape(dateShape.isRequired)
  ).isRequired,
};

export default CalendarView;
