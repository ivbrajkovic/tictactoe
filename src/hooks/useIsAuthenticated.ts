import { useSelector } from 'react-redux';

import { selectToken } from 'features/auth/AuthSlice';

export const useIsAuthenticated = () => useSelector(selectToken);
