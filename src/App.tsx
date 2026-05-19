import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import './app.css'
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Toaster
        position="top-center"
        reverseOrder
      />
      <Router />
    </MantineProvider>
  );
}
