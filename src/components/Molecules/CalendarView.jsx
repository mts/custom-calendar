import React from 'react';
import {shape, arrayOf, string, number} from 'prop-types';
import './CalendarView.scss';

const dateShape = shape({
  day: number,
  month: number,
  year: number
});

const CalendarView = ({dayNames, today, viewDates}) => {
  return (
    <div className="calendar-view">
      {dayNames.map((dayName) => (
        <span
          key={dayName}
          className="calendar-view__day">
            {dayName}
        </span>
      ))}
      {viewDates.map((date) => (
        <span
          key={date.dateOfTheMonth}
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
  viewDates: arrayOf(
    shape(dateShape.isRequired)
  ).isRequired,
};

export default CalendarView;
