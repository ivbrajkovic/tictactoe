import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { Notifications } from '@mantine/notifications';

import { StoreProvider } from 'providers/StoreProvider';
import { ThemeProvider } from 'providers/ThemeProvider';
import { ModalsProvider } from 'providers/ModalProvider';
import { Router } from 'router/Router';

const App = () => (
  <StoreProvider>
    <ThemeProvider>
      <ModalsProvider>
        <Notifications />
        <Router />
      </ModalsProvider>
    </ThemeProvider>
  </StoreProvider>
);

export default App;
