import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Organisms/Date/Calendar';
import './index.css';

ReactDOM.render(
  <div className="calendar">
    <Calendar
        today={{
          year: 2018,
          monthOfYear: 8,
          dateOfTheMonth: 7,
        }}
    />
  </div>,
  document.getElementById('root'));



