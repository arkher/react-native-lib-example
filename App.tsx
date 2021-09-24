import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/theme';
import Storybook from './storybook';

const App = (): React.ReactNode => (
  <ThemeProvider theme={theme}>
    <Storybook />
  </ThemeProvider>
);

export default App;
