// mocks/router.js

import { createContext } from 'react';

export const useRouter = () => ({
  route: '',
  pathname: '',
  query: '',
  asPath: '',
  push: async () => true,
});

export const RouterContext = createContext({
  route: '',
  pathname: '',
  query: '',
  asPath: '',
  push: async () => true,
});
