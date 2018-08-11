import React from 'react';
import {shape} from 'prop-types';
import {iconShape} from '../../../data/shape';
import {getPath} from '../../../utility/font';

const Icon = ({ name, width, height, fill, className }) => (
  <svg
    fill={fill}
    fontSize="1px"
    width={width}
    height={height}
    viewBox="0 0 1024 1024"
    className={className}
  >
    <path d={getPath(name)}></path>
  </svg>
);

Icon.defaultProps = {
  className: '',
  fill: '',
};

Icon.propTypes = shape(iconShape).isRequired;

export default Icon;
