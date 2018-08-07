import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Calendar from '../components/Organisms/Calendar';

storiesOf('Celendar', module)
  .add('default', () => (
    <Calendar />
  ));
