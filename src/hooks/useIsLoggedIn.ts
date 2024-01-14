import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'features/auth/AuthSlice';

export const useIsLoggedIn = () => useSelector(selectIsLoggedIn);
