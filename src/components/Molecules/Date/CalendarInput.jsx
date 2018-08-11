import React from 'react';
import {shape, func} from 'prop-types';
import Label from '../../Atoms/Text/Label';
import Icon from '../../Atoms/Image/Icon';
import {dayShape} from '../../../data/shape';
import './CalendarInput.scss';

const CalendarInput = ({today, toggleView}) => {
  const getText = () => `
    ${
      today.dateOfTheMonth < 10
      ? `0${String(today.dateOfTheMonth)}`
      : String(today.dateOfTheMonth)
    } -
    ${
      today.monthOfYear < 10
      ? `0${String(today.monthOfYear)}`
      : String(today.monthOfYear)
    } -
    ${String(today.year)}
  `;

  return (
    <div className="calendar-input">
      <div className="calendar-input__left">
        <div className="calendar-input__left-label">
          <Label color="grey" size="small" text="Ingangsdatum" />
        </div>
        <div className="calendar-input__left-text">
          <Label
            color="blue"
            size="large"
            text={getText()}
            />
        </div>
      </div>
      <div onClick={toggleView} className="calendar-input__right">
        <Icon fill="#c6c6c6" name={'calendar'} width={50} height={50} />
      </div>
    </div>
  )
}

CalendarInput.propTypes = {
  today: shape(dayShape).isRequired,
  toggleView: func
};

export default CalendarInput;

/*
`CalendarInput` is a
  stateless function component
  receiving `today, toggleView` props
`rendering`
  two Label components and an Icon component
`handling`
  onClick event by firing toggleView function prop

Sample usage is as follows:
```javascript
  <CalendarInput
    today={{
      year: 2015,
      monthOfYear: 9,
      dateOfTheMonth: 27,
    }}
    toggleView={() => {}}
  />
```
*/
