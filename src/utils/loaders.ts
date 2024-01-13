import { store } from 'store/store';
import { LoaderFunctionArgs, redirect } from 'react-router-dom';

export const protectedLoader = ({ request }: LoaderFunctionArgs) => {
  console.log('protectedLoader', store.getState().auth.token);

  if (Boolean(store.getState().auth.token)) return null;
  let params = new URLSearchParams();
  params.set('from', new URL(request.url).pathname);
  return redirect('/login?' + params.toString());
};

export const authorizationLoader = () => {
  console.log('authorizationLoader', store.getState().auth.token);

  if (!Boolean(store.getState().auth.token)) return null;
  return redirect('/');
};
