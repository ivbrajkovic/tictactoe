import { store } from 'store/store';
import { LoaderFunctionArgs, redirect } from 'react-router-dom';

export const protectedLoader = ({ request }: LoaderFunctionArgs) => {
  if (Boolean(store.getState().auth.user)) return null;
  let params = new URLSearchParams();
  params.set('from', new URL(request.url).pathname);
  return redirect('/login?' + params.toString());
};

export const authorizationLoader = () => {
  if (!Boolean(store.getState().auth.user)) return null;
  return redirect('/');
};
