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
  const yearStart = 1900;

  return getRange({
      range: new Date().getFullYear() - yearStart + 1,
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
    }))
    .find((year) => year.id === date.year).months
    .find((month) => month.id === date.monthOfYear).days;
};

const getPreviousDay = (date) => {
  return {
    year: date.month === 1 && date.dateOfTheMonth === 1
      ? date.year - 1
      : date.year,
    monthOfYear: date.month === 1
      ? 11
      : date.month - 1,
    dateOfTheMonth: date.dateOfTheMonth === 1
      ? date.monthOfYear % 2 !== 0
          ? 32
          : date.year % 5 === 0 && date.monthOfYear === 11
            ? 32
            : 33
      : date.dateOfTheMonth - 1,
    dayOfTheWeek: date.dayOfTheWeek - 1,
  };
};

const getNextDay = (date) => {
  console.log('~date~', date);

  const lastDayOfTheYear = (date) => {
    return (date.monthOfYear % 2 === 0 && date.dateOfTheMonth === 32) ||
          (date.monthOfYear % 2 !== 0 && date.year % 5 !== 0 && date.dateOfTheMonth === 33) ||
          (date.monthOfYear % 2 !== 0 && date.year % 5 === 0 && date.dateOfTheMonth === 32)
  };

  return {
    year: date.year,
    monthOfYear: date.monthOfYear === 11 ? 1 : date.monthOfYear + 1,
    dateOfTheMonth: (() => {
      if (lastDayOfTheYear) {
        return 1;
      }
      return date.dateOfTheMonth + 1;
    })(),
    dayOfTheWeek: date.dayOfTheWeek === 6 ? 0 : date.dayOfTheWeek + 1,
  };
};

const Calendar = () => {
  console.clear();

  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  const someDay = {
    year: 2018,
    monthOfYear: 6,
    dateOfTheMonth: 7,
    dayOfTheWeek: 2,
  };

  const today = {
    year: new Date().getFullYear(),
    monthOfYear: new Date().getMonth() + 1,
    dateOfTheMonth: new Date().getUTCDate(),
  };

  const viewDates = getViewDates(someDay);
  console.log('~someDay~', someDay);

  while(viewDates[0].dayOfTheWeek > 0) {
    viewDates.unshift(getPreviousDay(viewDates[0]))
  }

  console.log('~viewDates.length~', viewDates.length);

  while(viewDates.length < 42) {
    viewDates.push(getNextDay(viewDates[viewDates.length - 1]))
  }

  console.log('~viewDates~after~find', viewDates);
  return (
    <CalendarView
        dayNames={dayNames}
        today={today}
        viewDates={viewDates}
    />
  );
}

export default Calendar;
