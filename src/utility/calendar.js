let dayOfTheWeekIndex;

const getDay = (year, month, day) => ({
  year: year,
  monthOfYear: month,
  dateOfTheMonth: day,
  dayOfTheWeek: dayOfTheWeekIndex++ % 7
});

const getRange = ({range, indexSeed, valueSeed}) => Array(range).fill().map((_, index) => valueSeed + index + indexSeed);

const addLastMonthsDates = (filteredIndexedDays, allIndexedDays) => {
  while(filteredIndexedDays[0].dayOfTheWeek > 0) {
    filteredIndexedDays.unshift(allIndexedDays[filteredIndexedDays[0].index - 1])
  }
};

const addNextMonthsDates = (filteredIndexedDays, allIndexedDays) => {
  while(filteredIndexedDays.length < 42) {
    filteredIndexedDays.push(allIndexedDays[filteredIndexedDays[filteredIndexedDays.length -  1].index + 1])
  }
};

const getFilteredIndexedDays = (allIndexedDays, today) => {
  return allIndexedDays.filter((day) => day.year === today.year && day.monthOfYear === today.monthOfYear)
};

const getAllIndexedDays = (allDays) => {
  let allIndexedDays = [];

  allDays.map((year) => year.months.map((month) => month.days.map((day) => allIndexedDays.push(day))))

  return allIndexedDays.map((day, index) => ({ ...day, index}));
};

export const getDisplayDays = (today) => {
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

    const allIndexedDays = getAllIndexedDays(allDays);

    const filteredIndexedDays = getFilteredIndexedDays(allIndexedDays, today);

    addLastMonthsDates(filteredIndexedDays, allIndexedDays);

    addNextMonthsDates(filteredIndexedDays, allIndexedDays);

    return filteredIndexedDays;
};
