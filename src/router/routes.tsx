import { RouteObject } from 'react-router-dom';
import { Layout } from 'features/layout/Layout';
import { Login } from 'features/auth/Login';
import { Register } from 'features/auth/Register';
import { authorizationLoader, protectedLoader } from 'utils/loaders';

export const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: Layout,
    children: [
      {
        loader: protectedLoader,
        children: [
          {
            index: true,
            element: <div>Home</div>,
          },
          {
            path: '/about',
            element: <div>About</div>,
          },
        ],
      },
      {
        loader: authorizationLoader,
        children: [
          {
            path: '/login',
            Component: Login,
            action: () => {
              console.log('login action');
              return null;
            },
          },
          {
            path: '/register',
            Component: Register,
          },
        ],
      },
    ],
  },
];
