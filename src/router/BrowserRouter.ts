import { createBrowserRouter } from 'react-router-dom';
import { routes } from 'router/routes';
import { persistor } from 'store/store';

class BrowserRouter {
  router: ReturnType<typeof createBrowserRouter> | null = null;

  constructor() {
    // Initialize the router after store rehydration to ensure current data
    persistor.subscribe(this.init);
  }

  init = () => {
    this.router = createBrowserRouter(routes);
  };
}

export const browserRouter = new BrowserRouter();
