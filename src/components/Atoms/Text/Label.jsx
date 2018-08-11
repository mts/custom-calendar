import './Label.scss';
import React from 'react';
import {string, oneOf} from 'prop-types';
import cx from 'classnames';

const Label = ({color, size, text}) => (
    <span
        className={cx('label',
        {
            'label--grey': color === 'grey',
            'label--black': color === 'black',
            'label--blue': color === 'blue'
        },
        {
            'label--tiny': size === 'tiny',
            'label--small': size === 'small',
            'label--medium': size === 'medium',
            'label--large': size === 'large'
        }
        )}
    >
      {text}
    </span>
);

Label.propTypes = {
    color: oneOf(['grey', 'black', 'blue']).isRequired,
    size: oneOf(['tiny', 'small', 'medium', 'large']).isRequired,
    text: string.isRequired
};

export default Label;

/*
`Label` is a
  stateless function component
  receiving `color, size, text` props
`rendering`
  a styled span

Sample usages are as follows:
```javascript
    <Label color="black" size="tiny" text="some label" />
    <Label color="black" size="small" text="some label" />
    <Label color="black" size="medium" text="some label" />
    <Label color="black" size="large" text="some label" />

    <Label color="blue" size="tiny" text="some label" />
    <Label color="blue" size="small" text="some label" />
    <Label color="blue" size="medium" text="some label" />
    <Label color="blue" size="large" text="some label" />

    <Label color="grey" size="tiny" text="some label" />
    <Label color="grey" size="small" text="some label" />
    <Label color="grey" size="medium" text="some label" />
    <Label color="grey" size="large" text="some label" />
```
*/
