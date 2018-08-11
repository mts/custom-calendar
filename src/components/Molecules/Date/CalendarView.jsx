import React from 'react';
import {shape, arrayOf, number} from 'prop-types';
import './CalendarView.scss';
import cx from 'classnames';

const dateShape = shape({
  day: number,
  month: number,
  year: number
});

const CalendarView = ({dayNames, displayDays}) => {
  return (
    <div className="calendar-view">
      {dayNames.map((dayName) => (
        <span
          key={dayName}
          className="calendar-view__day">
            {dayName}
        </span>
      ))}
      {displayDays.map((day, index) => (
        <span
          key={index}
          className={cx('calendar-view__day', {
            'calendar-view__day-last-month': day.lastMonth,
            'calendar-view__day-this-month': day.thisMonth,
            'calendar-view__day-today': day.today,
            'calendar-view__day-next-month': day.nextMonth
          })}
          >
            {day.dateOfTheMonth}
        </span>
      ))}
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
