import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Select from '../components/Molecules/Action/Select';
import {options} from '../data/select';

storiesOf('Select', module)
  .add('default', () => (
    <Select options={options} />
  ));
