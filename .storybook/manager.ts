// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import rpsTheme from './rpsTheme';

addons.setConfig({
  theme: rpsTheme,
});
