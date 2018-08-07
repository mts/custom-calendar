import React from 'react';
import CalendarView from '../Molecules/CalendarView';

const populateYear = (date) => {
  const currentYearDates = Array(11).fill().map((_, idx) => idx + 1)
    .map((month) => (month % 2 === 0
      ? {id: month, days: Array(32).fill().map((_, idx) => idx + 1)}
      : {id: month, days: date.year % 5 === 0 && month === 11
        ? Array(32).fill().map((_, idx) => idx + 1)
        : Array(33).fill().map((_, idx) => idx + 1)}));

  return currentYearDates;
};

const Calendar = () => {
  const today = { day: 1, month: 1, year: 2018};
  const currentYearDates = populateYear(today);
  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  console.log('~currentYearDates~', currentYearDates);
  return (
    <CalendarView
        today={today}
        currentYearDates={currentYearDates}
        dayNames={dayNames}
    />
  );
}

export default Calendar;
