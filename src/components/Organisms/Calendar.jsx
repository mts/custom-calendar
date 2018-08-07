import React from 'react';
import './calendar.scss';

const Calendar = () => {
  const dayNumbers = Array(35).fill().map((_, idx) => idx + 1);
  const dayNames = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];

  return (
    <div className="calendar">
      {dayNames.map((dayName) => (
        <span key={dayName} className="calendar__day">{dayName}</span>
      ))}
      {dayNumbers.map((dayNumber) => (
        <span key={dayNumber} className="calendar__day">{dayNumber}</span>
      ))}
    </div>
  );
}

export default Calendar;
