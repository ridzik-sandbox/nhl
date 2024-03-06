import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './src/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const defaultTheme = createTheme();

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
