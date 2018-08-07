import React from 'react';
import CalendarView from '../Molecules/CalendarView';

const makeDates = (date) => {
  const dates = Array(11).fill().map((_, idx) => idx + 1);

  return {};
};

const Calendar = () => {
  const today = { day: 1, month: 1, year: 2018};
  const datesofYear = makeDates(today);
  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
  const dayNumbers = Array(35).fill().map((_, idx) => idx + 1);

  return (
    <CalendarView
        today={today}
        datesofYear={datesofYear}
        dayNames={dayNames}
        dayNumbers={dayNumbers}
    />
  );
}

export default Calendar;
