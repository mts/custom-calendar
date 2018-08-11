// Picks up all Storybook stories under ../src/stories

import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
