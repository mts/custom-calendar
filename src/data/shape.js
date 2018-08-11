import {string, number} from 'prop-types';

export const iconShape = {
  name: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
  fill: string,
  className: string
};
