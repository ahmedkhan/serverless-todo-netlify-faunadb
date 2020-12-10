import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { deep } from '@theme-ui/presets';
import IdentityProvider from "../context/authContext";
import { ApolloProvider } from '@apollo/client';
import { client } from "../apollo/client";
const newTheme = {
  ...deep,
  sizes: { container: 1024 }
};


export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <IdentityProvider>
      <ThemeProvider theme={newTheme}>
        {element}
      </ThemeProvider>
    </IdentityProvider>
  </ApolloProvider>
);


