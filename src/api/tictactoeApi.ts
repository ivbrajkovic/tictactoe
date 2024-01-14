import { tictactoeEmptyApi as api } from './tictactoeEmptyApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    gamesList: build.query<GamesListApiResponse, GamesListApiArg>({
      query: (queryArg) => ({
        url: `/games/`,
        params: {
          after: queryArg.after,
          before: queryArg.before,
          limit: queryArg.limit,
          offset: queryArg.offset,
          status: queryArg.status,
        },
      }),
    }),
    gamesCreate: build.mutation<GamesCreateApiResponse, GamesCreateApiArg>({
      query: () => ({ url: `/games/`, method: 'POST' }),
    }),
    gamesRetrieve: build.query<GamesRetrieveApiResponse, GamesRetrieveApiArg>({
      query: (queryArg) => ({ url: `/games/${queryArg}/` }),
    }),
    gamesJoinCreate: build.mutation<
      GamesJoinCreateApiResponse,
      GamesJoinCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/games/${queryArg}/join/`,
        method: 'POST',
      }),
    }),
    gamesMoveCreate: build.mutation<
      GamesMoveCreateApiResponse,
      GamesMoveCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/games/${queryArg.id}/move/`,
        method: 'POST',
        body: queryArg.makeMove,
      }),
    }),
    loginCreate: build.mutation<LoginCreateApiResponse, LoginCreateApiArg>({
      query: (queryArg) => ({ url: `/login/`, method: 'POST', body: queryArg }),
    }),
    logoutCreate: build.mutation<LogoutCreateApiResponse, LogoutCreateApiArg>({
      query: () => ({ url: `/logout/`, method: 'POST' }),
    }),
    openapiRetrieve: build.query<
      OpenapiRetrieveApiResponse,
      OpenapiRetrieveApiArg
    >({
      query: (queryArg) => ({
        url: `/openapi/`,
        params: { format: queryArg.format, lang: queryArg.lang },
      }),
    }),
    registerCreate: build.mutation<
      RegisterCreateApiResponse,
      RegisterCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/register/`,
        method: 'POST',
        body: queryArg,
      }),
    }),
    usersList: build.query<UsersListApiResponse, UsersListApiArg>({
      query: (queryArg) => ({
        url: `/users/`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    usersRetrieve: build.query<UsersRetrieveApiResponse, UsersRetrieveApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg}/` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as tictactoeApi };
export type GamesListApiResponse = /** status 200  */ PaginatedGameListRead;
export type GamesListApiArg = {
  after?: string;
  before?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  status?: 'finished' | 'open' | 'progress';
};
export type GamesCreateApiResponse = /** status 200  */ GameRead;
export type GamesCreateApiArg = void;
export type GamesRetrieveApiResponse = /** status 200  */ GameRead;
export type GamesRetrieveApiArg =
  /** A unique integer value identifying this game. */ number;
export type GamesJoinCreateApiResponse = unknown;
export type GamesJoinCreateApiArg =
  /** A unique integer value identifying this game. */ number;
export type GamesMoveCreateApiResponse = unknown;
export type GamesMoveCreateApiArg = {
  /** A unique integer value identifying this game. */
  id: number;
  makeMove: MakeMove;
};
export type LoginCreateApiResponse = /** status 200  */ LoginOutput;
export type LoginCreateApiArg = LoginInput;
export type LogoutCreateApiResponse = unknown;
export type LogoutCreateApiArg = void;
export type OpenapiRetrieveApiResponse = /** status 200  */ {
  [key: string]: any;
};
export type OpenapiRetrieveApiArg = {
  format?: 'json' | 'yaml';
  lang?:
    | 'af'
    | 'ar'
    | 'ar-dz'
    | 'ast'
    | 'az'
    | 'be'
    | 'bg'
    | 'bn'
    | 'br'
    | 'bs'
    | 'ca'
    | 'cs'
    | 'cy'
    | 'da'
    | 'de'
    | 'dsb'
    | 'el'
    | 'en'
    | 'en-au'
    | 'en-gb'
    | 'eo'
    | 'es'
    | 'es-ar'
    | 'es-co'
    | 'es-mx'
    | 'es-ni'
    | 'es-ve'
    | 'et'
    | 'eu'
    | 'fa'
    | 'fi'
    | 'fr'
    | 'fy'
    | 'ga'
    | 'gd'
    | 'gl'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hsb'
    | 'hu'
    | 'hy'
    | 'ia'
    | 'id'
    | 'ig'
    | 'io'
    | 'is'
    | 'it'
    | 'ja'
    | 'ka'
    | 'kab'
    | 'kk'
    | 'km'
    | 'kn'
    | 'ko'
    | 'ky'
    | 'lb'
    | 'lt'
    | 'lv'
    | 'mk'
    | 'ml'
    | 'mn'
    | 'mr'
    | 'ms'
    | 'my'
    | 'nb'
    | 'ne'
    | 'nl'
    | 'nn'
    | 'os'
    | 'pa'
    | 'pl'
    | 'pt'
    | 'pt-br'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sq'
    | 'sr'
    | 'sr-latn'
    | 'sv'
    | 'sw'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'tk'
    | 'tr'
    | 'tt'
    | 'udm'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zh-hans'
    | 'zh-hant';
};
export type RegisterCreateApiResponse = unknown;
export type RegisterCreateApiArg = RegisterInput;
export type UsersListApiResponse = /** status 200  */ PaginatedUserListRead;
export type UsersListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type UsersRetrieveApiResponse = /** status 200  */ UserRead;
export type UsersRetrieveApiArg =
  /** A unique integer value identifying this user. */ number;
export type ReducedUser = {};
export type ReducedUserRead = {
  id: number;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
};
export type Game = {
  winner: ReducedUser;
  first_player: ReducedUser;
  second_player: ReducedUser;
};
export type StatusEnum = 'open' | 'progress' | 'finished';
export type GameRead = {
  id: number;
  board: number[][];
  winner: ReducedUserRead;
  first_player: ReducedUserRead;
  second_player: ReducedUserRead;
  created: string;
  status: StatusEnum;
};
export type PaginatedGameList = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Game[];
};
export type PaginatedGameListRead = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: GameRead[];
};
export type MakeMove = {
  row: number;
  col: number;
};
export type LoginOutput = {
  token: string;
  username: string;
  id: number;
};
export type LoginInput = {
  username: string;
  password: string;
};
export type RegisterInput = {
  username: string;
  password: string;
};
export type User = {
  game_count: number;
  win_rate: number;
};
export type UserRead = {
  id: number;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  game_count: number;
  win_rate: number;
};
export type PaginatedUserList = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: User[];
};
export type PaginatedUserListRead = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: UserRead[];
};
export const {
  useGamesListQuery,
  useLazyGamesListQuery,
  useGamesCreateMutation,
  useGamesRetrieveQuery,
  useLazyGamesRetrieveQuery,
  useGamesJoinCreateMutation,
  useGamesMoveCreateMutation,
  useLoginCreateMutation,
  useLogoutCreateMutation,
  useOpenapiRetrieveQuery,
  useLazyOpenapiRetrieveQuery,
  useRegisterCreateMutation,
  useUsersListQuery,
  useLazyUsersListQuery,
  useUsersRetrieveQuery,
  useLazyUsersRetrieveQuery,
} = injectedRtkApi;
