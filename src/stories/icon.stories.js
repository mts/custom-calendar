import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from '../components/Atoms/Image/Icon';

storiesOf('Icon', module)
  .add('chevron-thin-left', () => (
    <Icon name={'chevron-thin-left'} width={20} height={20} />
  ))
  .add('chevron-thin-right', () => (
    <Icon name={'chevron-thin-right'} width={20} height={20} />
  ));
