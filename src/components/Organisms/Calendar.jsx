import React from 'react';
import CalendarView from '../Molecules/CalendarView';

let dayOfTheWeekIndex;

const getDay = (year, month, day) => ({
  year: year,
  monthOfYear: month,
  dateOfTheMonth: day,
  dayOfTheWeek: dayOfTheWeekIndex++ % 7
});

const getRange = ({range, indexSeed, valueSeed}) => Array(range).fill().map((_, index) => valueSeed + index + indexSeed);

const getViewDates = (date) => {
  dayOfTheWeekIndex = 0;
  console.log('~dayOfTheWeekIndex~', dayOfTheWeekIndex);
  const yearStart = date.year - 1;

  return getRange({
      range: date.year - yearStart + 2,
      indexSeed: 0,
      valueSeed: yearStart
    })
    .map((year) => ({
      id: year,
      months: getRange({range: 11, indexSeed: 1, valueSeed: 0})
              .map((month) => (month % 2 === 0
                ? {
                    id: month,
                    days: getRange({range: 32, indexSeed: 1, valueSeed: 0})
                            .map(day => getDay(year, month, day))
                  }
                : {
                  id: month,
                  days: year % 5 === 0 && month === 11
                    ? getRange({range: 32, indexSeed: 1, valueSeed: 0})
                        .map(day => getDay(year, month, day))
                    : getRange({range: 33, indexSeed: 1, valueSeed: 0})
                        .map(day => getDay(year, month, day))
                }))
    }));
    // .find((year) => year.id === date.year).months
    // .find((month) => month.id === date.monthOfYear).days;
};

const Calendar = () => {
  console.clear();

  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  const someDay = {
    year: 2018,
    monthOfYear: 7,
    dateOfTheMonth: 11,
    dayOfTheWeek: 6,
  };

  const today = {
    year: new Date().getFullYear(),
    monthOfYear: new Date().getMonth() + 1,
    dateOfTheMonth: new Date().getUTCDate(),
  };

  const viewDates = getViewDates(someDay);
  console.log('~someDay~', someDay);

  console.log('~viewDates~', viewDates);

  return (
    <CalendarView
        dayNames={dayNames}
        today={today}
        viewDates={viewDates}
    />
  );
}

export default Calendar;
