import React from 'react';
import CalendarView from '../Molecules/CalendarView';

const getRange = (range) => Array(range).fill().map((_, idx) => idx + 1);

const getViewDates = (date) => {
  return getRange(11)
    .map((month) => (month % 2 === 0
      ? {id: month, days: getRange(32)}
      : {id: month, days: date.year % 5 === 0 && month === 11
        ? getRange(32)
        : getRange(33)}))
    .find((month) => month.id === date.month).days
    .map((idx) => ({ day: idx, month: date.month, year: date.year}));
};

const Calendar = () => {
  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
  const today = { day: 1, month: 1, year: 2018};
  const viewDates = getViewDates(today);

  return (
    <CalendarView
        dayNames={dayNames}
        today={today}
        viewDates={viewDates}
    />
  );
}

export default Calendar;
