import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { Notifications } from '@mantine/notifications';

import { StoreProvider } from 'providers/StoreProvider';
import { ThemeProvider } from 'providers/ThemeProvider';
import { Router } from 'router/Router';

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <Notifications />
      <Router />
    </ThemeProvider>
  </StoreProvider>
);

export default App;
