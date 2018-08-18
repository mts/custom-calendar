// Picks up all Storybook stories under ../src/stories

import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
