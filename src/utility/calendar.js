import {getRange} from './number';

let dayOfTheWeekIndex;

const getDay = (year, month, day) => ({
  year: year,
  monthOfYear: month,
  dateOfTheMonth: day,
  dayOfTheWeek: dayOfTheWeekIndex++ % 7
});

const addLastMonthsDays = (filteredIndexedDays, allIndexedDays) => {
  while(filteredIndexedDays[0].dayOfTheWeek > 0) {
    filteredIndexedDays.unshift({...allIndexedDays[filteredIndexedDays[0].index - 1], lastMonth: true})
  }
};

const addNextMonthsDays = (filteredIndexedDays, allIndexedDays) => {
  while(filteredIndexedDays.length < 42) {
    filteredIndexedDays.push({...allIndexedDays[filteredIndexedDays[filteredIndexedDays.length -  1].index + 1], nextMonth: true})
  }
};

const getThisMonthsDays = (allIndexedDays, today) => {
  return allIndexedDays
    .filter((day) => day.year === today.year && day.monthOfYear === today.monthOfYear)
    .map((day) => {
      if (day.year === today.year && day.monthOfYear === today.monthOfYear && day.dateOfTheMonth === today.dateOfTheMonth) {
        return {...day, thisMonth: true, today: true}
      }

      if (day.year === today.year && day.monthOfYear === today.monthOfYear) {
        return {...day, thisMonth: true}
      }

      return day;
    });
};

const getAllIndexedDays = (allDays) => {
  let allIndexedDays = [];

  allDays.map((year) => year.months.map((month) => month.days.map((day) => allIndexedDays.push(day))))

  return allIndexedDays.map((day, index) => ({ ...day, index}));
};

const getEvenMonthDays = (year, month) => ({
  id: month,
  days: getRange({range: 32, indexSeed: 1, valueSeed: 0})
          .map(day => getDay(year, month, day))
});

const getOddMonthDays = (year, month) => ({
  id: month,
  days: year % 5 === 0 && month === 11
    ? getRange({range: 32, indexSeed: 1, valueSeed: 0})
        .map(day => getDay(year, month, day))
    : getRange({range: 33, indexSeed: 1, valueSeed: 0})
        .map(day => getDay(year, month, day))
});

export const getDisplayDays = (today) => {
  console.log('~today~', today);
  dayOfTheWeekIndex = 0;

  const yearStart = today.year - 1;

  const allDays = getRange({
      range: today.year - yearStart + 2,
      indexSeed: 0,
      valueSeed: yearStart
    })
    .map((year) => ({
      id: year,
      months: getRange({range: 11, indexSeed: 1, valueSeed: 0})
        .map((month) => (month % 2 === 0
          ? getEvenMonthDays(year, month)
          : getOddMonthDays(year, month)))
    }));

    const allIndexedDays = getAllIndexedDays(allDays);

    const filteredIndexedDays = getThisMonthsDays(allIndexedDays, today);

    addLastMonthsDays(filteredIndexedDays, allIndexedDays);

    addNextMonthsDays(filteredIndexedDays, allIndexedDays);

    return filteredIndexedDays;
};
