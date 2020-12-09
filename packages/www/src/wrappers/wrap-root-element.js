import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { deep } from '@theme-ui/presets';
import IdentityProvider from "../context/authContext";

const newTheme = {
  ...deep,
  sizes: { container: 1024 }
};


export const wrapRootElement = ({ element }) => (
  <IdentityProvider>
    <ThemeProvider theme={newTheme}>
      {element}
    </ThemeProvider>
  </IdentityProvider>

);


