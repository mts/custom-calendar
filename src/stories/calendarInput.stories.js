// CalendarInput stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import CalendarInput from '../components/Molecules/Date/CalendarInput';

storiesOf('CalendarInput', module)
  .add('default', () => (
    <CalendarInput
      today={{
        year: 2015,
        monthOfYear: 9,
        dateOfTheMonth: 27,
      }}
      toggleView={() => {}}
    />
  ));
