// Reusable shapes for component prop types

import {string, number} from 'prop-types';

export const iconShape = {
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
  className: string
};

export const dayShape = {
  year: number.isRequired,
  monthOfYear: number.isRequired,
  dateOfTheMonth: number.isRequired
};
