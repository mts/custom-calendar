import React from 'react';
import {shape, arrayOf, number} from 'prop-types';
import Select from '../Action/Select';
import Label from '../../Atoms/Text/Label';
import cx from 'classnames';
import './CalendarView.scss';
import {monthOptions, yearOptions, yearStart} from '../../../data/select';

const dateShape = shape({
  day: number,
  month: number,
  year: number
});

class CalendarView extends React.Component {
  onDayChange = (index) => {
    const {onChange, displayDays} = this.props;

    const day = displayDays.find((day) => day.index === index);

    onChange({
        year: day.year,
        monthOfYear: day.monthOfYear,
        dateOfTheMonth: day.dateOfTheMonth,
    });
  };

  onMonthChange = (index) => {
    const {onChange, displayDays} = this.props;

    onChange({
        year: displayDays.find((day) => day.today === true).year,
        monthOfYear: index + 1,
        dateOfTheMonth: 1,
    });
  };

  onYearChange = (index) => {
    const {onChange, displayDays} = this.props;

    onChange({
        year: yearOptions[index],
        monthOfYear: displayDays.find((day) => day.today === true).monthOfYear,
        dateOfTheMonth: 1,
    });
  };

  render() {
    const{dayNames, displayDays} = this.props;

    return (
      <div className="calendar-view">
        <div className="calendar-view__label">
          <Label color="grey" size="small" text="Ingangsdatum" />
        </div>
        <div className="calendar-view__month-year">
          <Select
            options={monthOptions.map((month) => month)}
            selectedOptionIndex={displayDays.find((day) => day.today === true).monthOfYear - 1}
            optionType={'month'}
            onChange={this.onMonthChange}
          />
          <Select
            options={yearOptions.map((year) => String(year))}
            selectedOptionIndex={displayDays.find((day) => day.today === true).year - yearStart}
            optionType={'year'}
            onChange={this.onYearChange}
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
              ref={day.index}
              onClick={() => { this.onDayChange(day.index); }}
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
