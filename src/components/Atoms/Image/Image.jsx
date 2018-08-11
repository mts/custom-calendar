import React from 'react';
import {shape} from 'prop-types';
import {imageShape} from '../../../data/shape';

const Image = ({ src, alt, height, width }) => (
    <img
        src={src}
        alt={alt}
        height={height}
        width={width}
    />
);

Image.propTypes = shape(imageShape).isRequired;

export default Image;
