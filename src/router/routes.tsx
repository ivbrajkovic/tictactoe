import { RouteObject, redirect } from 'react-router-dom';
import { Layout } from 'layout/Layout';
import { Login } from 'features/auth/Login';
import { Register } from 'features/auth/Register';
import { authorizationLoader, protectedLoader } from 'utils/loaders';
import { GameList } from 'features/gameList/GameList';
import { Game } from 'features/gameList/Game';

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
            loader: () => redirect('/games'),
          },
          {
            path: 'games',
            Component: GameList,
          },
          {
            path: 'games/:gameId',
            Component: Game,
          },
          {
            path: 'new-game',
            element: <div>New Game</div>,
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
