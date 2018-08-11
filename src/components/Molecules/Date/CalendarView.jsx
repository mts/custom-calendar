import React from 'react';
import {shape, arrayOf, number} from 'prop-types';
import Select from '../Action/Select';
import Label from '../../Atoms/Text/Label';
import cx from 'classnames';
import './CalendarView.scss';
import {monthOptions, yearOptions} from '../../../data/select';

const dateShape = shape({
  day: number,
  month: number,
  year: number
});

const CalendarView = ({dayNames, displayDays}) => {
  return (
    <div className="calendar-view">
      <div className="calendar-view__text">
        <Label color="grey" size="medium" text="Ingangsdatum" />
      </div>
      <div className="calendar-view__month-year">
        <Select
          options={monthOptions.map((month) => month)}
          selectedOptionIndex={monthOptions.length - 1}
          optionType={'month'}
        />
        <Select
          options={yearOptions.map((year) => String(year))}
          selectedOptionIndex={yearOptions.length - 1}
          optionType={'year'}
        />
      </div>
      <div className="calendar-view__day">
        {dayNames.map((dayName) => (
          <span
            key={dayName}
            className="calendar-view__day-day">
              {dayName}
          </span>
        ))}
        {displayDays.map((day, index) => (
          <span
            key={index}
            className={cx('calendar-view__day-day', {
              'calendar-view__day-day-last-month': day.lastMonth,
              'calendar-view__day-day-this-month': day.thisMonth,
              'calendar-view__day-day-today': day.today,
              'calendar-view__day-day-next-month': day.nextMonth
            })}
            >
              {day.dateOfTheMonth}
          </span>
        ))}
      </div>
    </div>
  );
}

CalendarView.defaultProps = {
  dayNames: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']
};

CalendarView.propTypes = {
  displayDays: arrayOf(
    shape(dateShape.isRequired)
  ).isRequired,
};

export default CalendarView;
