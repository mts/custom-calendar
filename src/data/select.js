// Select molecule sample data

import {getRange} from '../utility/number';

export const yearStart = 1900;

export const weekOptions = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export const monthOptions = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November'
];

export const yearOptions = getRange({
      range: 1000,
      indexSeed: 0,
      valueSeed: yearStart
    })
