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

/*
`Image` is a
    stateless function component
    receiving `src, alt, height, width` props
`rendering`
    an img element.

Sample usages are as follows:
```javascript
  const largeImage = {
    "src": "https://placehold.it/200/#939393/000000",
    "alt": "news",
    "height": 200,
    "width": 200,
  };

  const mediumImage = {
    "src": "https://placehold.it/100/#939393/000000",
    "alt": "news",
    "height": 100,
    "width": 100,
  };

  const smallImage = {
    "src": "https://placehold.it/50/#939393/000000",
    "alt": "news",
    "height": 50,
    "width": 50,
  };

  const tinyImage = {
    "src": "https://placehold.it/25/#939393/000000",
    "alt": "news",
    "height": 25,
    "width": 25,
  };

  <Image {...largeImage} />
  <Image {...mediumImage} />
  <Image {...smallImage} />
  <Image {...tinyImage} />
```
*/
