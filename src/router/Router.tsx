import { RouterProvider } from 'react-router-dom';
import { browserRouter } from 'router/BrowserRouter';

export const Router = () =>
  !browserRouter.router ? null : (
    <RouterProvider router={browserRouter.router} />
  );
