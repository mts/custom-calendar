import {getRange} from '../utility/number';

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
  'november',
  'december'
];

export const yearOptions = getRange({
      range: 119,
      indexSeed: 0,
      valueSeed: 1900
    })
