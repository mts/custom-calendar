import {getRange} from '../utility/number';

export const yearStart = 1900;

export const weekOptions = [
  'Maandag',
  'Dinsdag',
  'Woensdag',
  'Donderdag',
  'Vrijdag',
  'Zaterdag',
  'Zondag'
];

export const monthOptions = [
  'januari',
  'februari',
  'maart',
  'april',
  'mei',
  'juni',
  'juli',
  'augustus',
  'september',
  'oktober',
  'november'
];

export const yearOptions = getRange({
      range: 119,
      indexSeed: 0,
      valueSeed: yearStart
    })
