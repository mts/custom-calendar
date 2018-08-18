import React from 'react'
import {arrayOf, string, number, oneOf ,func} from 'prop-types';
import Icon from '../../Atoms/Image/Icon';
import Label from '../../Atoms/Text/Label';
import cx from 'classnames';
import './Select.css';

const Select = ({options, selectedOptionIndex, optionType, onChange}) =>  {
  const onClickLeft = () => {
    onChange(selectedOptionIndex !== 0 ? selectedOptionIndex - 1 : options.length - 1);
  }

  const onClickRight = () => {
    onChange(selectedOptionIndex !== options.length - 1 ? selectedOptionIndex + 1 : 0);
  }

  return (
    <div className="select">
      <div onClick={onClickLeft} className="select__left">
        <Icon name={'backward'} width={15} height={15} />
      </div>
      <div className={cx('select__center', {
        'select__center--week': optionType === 'week',
        'select__center--month': optionType === 'month',
        'select__center--year': optionType === 'year'
      })}>
        <Label color="blue" size="medium" text={options[selectedOptionIndex]} />
      </div>
      <div onClick={onClickRight} className="select__right">
        <Icon name={'forward'} width={15} height={15} />
      </div>
    </div>
  )
}

Select.propTypes = {
  options: arrayOf(string).isRequired,
  selectedOptionIndex: number.isRequired,
  optionType: oneOf(['week', 'month', 'year']),
  onChange: func
};

export default Select;

/*
`Select` is a
  stateless function component
  receiving `options, selectedOptionIndex, optionType, onChange` props
`rendering`
  two Icon components on the left and on the right
  along with a Label component
`handling`
  onClick events via onClickLeft and onClickRight functions
  both firing onChange function prop

Sample usages are as follows:
```javascript
  <Select
    options={weekOptions.map((week) => week.toUpperCase())}
    selectedOptionIndex={weekOptions.length - 1}
    optionType={'week'}
  />
  <Select
    options={monthOptions.map((month) => month.toUpperCase())}
    selectedOptionIndex={monthOptions.length - 1}
    optionType={'month'}
  />
  <Select
    options={yearOptions.map((year) => String(year))}
    selectedOptionIndex={yearOptions.length - 1}
    optionType={'year'}
  />
```
*/
