import React from 'react';
import {shape, arrayOf, string, number} from 'prop-types';
import './CalendarView.scss';

const CalendarView = ({currentYearDates, today, dayNames}) => {
  const currentMonth = currentYearDates.find((month) => month.id === today.month);
  const currentMonthDays = currentMonth.days;

  console.log('~currentMonth~', currentMonth);

  return (
    <div className="calendar-view">
      {dayNames.map((dayName) => (
        <span key={dayName} className="calendar-view__day">{dayName}</span>
      ))}
      {currentMonthDays.map((dayNumber) => (
        <span key={dayNumber} className="calendar-view__day">{dayNumber}</span>
      ))}
    </div>
  );
}

CalendarView.propTypes = {
  today:shape({
    day: number,
    month: number,
    year: number
  }),
  currentYearDates: arrayOf(shape({
    id: number,
    days: arrayOf(number)
  })),
  dayNames: arrayOf(string)
};

export default CalendarView;
