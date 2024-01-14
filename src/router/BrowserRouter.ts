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

  navigate = (
    ...args: Parameters<ReturnType<typeof createBrowserRouter>['navigate']>
  ) => {
    return this.router?.navigate(...args);
  };
}

export const browserRouter = new BrowserRouter();
