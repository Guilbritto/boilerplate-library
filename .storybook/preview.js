import React from 'react';

import {CustomThemeProvider} from '../src/hooks/ThemeContext';

export const decorators = [
  (Story) => (
    <CustomThemeProvider>
      <Story />
    </CustomThemeProvider>
  ),
];
