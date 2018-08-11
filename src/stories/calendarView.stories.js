// CalendarView stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CalendarView from '../components/Molecules/Date/CalendarView';
import {getDisplayDays} from '../utility/calendar';

storiesOf('CalendarView', module)
  .add('default', () => (
    <CalendarView
      displayDays={getDisplayDays({
        year: 2017,
        monthOfYear: 5,
        dateOfTheMonth: 15,
      })}
      toggleView={() => {}}
    />
  ));
