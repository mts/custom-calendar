import React from 'react';
import CalendarView from '../Molecules/CalendarView';

const yearStart = 1900;

const getRange = ({range, indexSeed, valueSeed}) => Array(range).fill().map((_, idx) => valueSeed + idx + indexSeed);

const getViewDates = (date) => {
  return getRange({range: 11, indexSeed: 1, valueSeed: 0})
    .map((month) => (month % 2 === 0
      ? {id: month, days: getRange({range: 32, indexSeed: 1, valueSeed: 0})}
      : {id: month, days: date.year % 5 === 0 && month === 11
        ? getRange({range: 32, indexSeed: 1, valueSeed: 0})
        : getRange({range: 33, indexSeed: 1, valueSeed: 0})}))
    .find((month) => month.id === date.month).days
    .map((idx) => ({ day: idx, month: date.month, year: date.year}));
};

const getCenturyDates = () => {
  return getRange({
    range: new Date().getFullYear() - yearStart + 1,
    indexSeed: 0,
    valueSeed: yearStart
  });
};

const Calendar = () => {
  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
  const today = { day: 1, month: 1, year: 2018};

  const centuryDates = getCenturyDates(today);
  console.log('~centuryDates~', centuryDates);

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
