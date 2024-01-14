import { RouteObject, redirect } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Login } from 'features/auth/Login';
import { Register } from 'features/auth/Register';
import { authorizationLoader, protectedLoader } from 'utils/loaders';
import { GameList, Game } from 'features/game';
import { NotFoundImage } from 'components/NotFoundImage';

export const routes: RouteObject[] = [
  {
    // path: '/',
    Component: Layout,
    children: [
      {
        loader: protectedLoader,
        children: [
          { index: true, loader: () => redirect('games') },
          { path: 'games', Component: GameList },
          { path: 'games/:gameId', Component: Game },
        ],
      },
      {
        loader: authorizationLoader,
        children: [
          { path: 'login', Component: Login },
          { path: 'register', Component: Register },
        ],
      },
    ],
  },
  { path: '404', Component: NotFoundImage },
  { path: '*', loader: () => redirect('404') },
];
