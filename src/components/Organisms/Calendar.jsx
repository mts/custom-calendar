import React from 'react';
import CalendarView from '../Molecules/CalendarView';

const defaultDate = {
  day: 1,
  month: 1,
  year: 2018
};

const makeDates = (date) => {
  // const dates = Array(11).fill.map((_, idx) => idx + 1);

  return {};
};

const Calendar = () => {
  const dates = makeDates(defaultDate);
  const dayNumbers = Array(35).fill().map((_, idx) => idx + 1);
  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  return (
    <CalendarView
        dates={dates}
        dayNumbers={dayNumbers}
        dayNames={dayNames}
    />
  );
}

export default Calendar;
