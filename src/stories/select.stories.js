// Select stories for Storybook

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Select from '../components/Molecules/Action/Select';
import {weekOptions, monthOptions, yearOptions} from '../data/select';

storiesOf('Select', module)
  .add('week', () => (
    <Select
      options={weekOptions.map((week) => week.toUpperCase())}
      selectedOptionIndex={weekOptions.length - 1}
      optionType={'week'}
    />
  ))
  .add('month', () => (
    <Select
      options={monthOptions.map((month) => month.toUpperCase())}
      selectedOptionIndex={monthOptions.length - 1}
      optionType={'month'}
    />
  ))
  .add('year', () => (
    <Select
      options={yearOptions.map((year) => String(year))}
      selectedOptionIndex={yearOptions.length - 1}
      optionType={'year'}
    />
  ));
