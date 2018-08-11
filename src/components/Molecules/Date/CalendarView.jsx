import React from 'react';
import {shape, arrayOf, number} from 'prop-types';
import Select from '../Action/Select';
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
      <div className="calendar-view__top">
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
      </div>
      <div className="calendar-view__bottom">
        {dayNames.map((dayName) => (
          <span
            key={dayName}
            className="calendar-view__bottom-day">
              {dayName}
          </span>
        ))}
        {displayDays.map((day, index) => (
          <span
            key={index}
            className={cx('calendar-view__bottom-day', {
              'calendar-view__bottom-day-last-month': day.lastMonth,
              'calendar-view__bottom-day-this-month': day.thisMonth,
              'calendar-view__bottom-day-today': day.today,
              'calendar-view__bottom-day-next-month': day.nextMonth
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
