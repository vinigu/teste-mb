import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import Loading from '@components/Loading';

export interface ILoading {
  showLoading?: void;
}

interface ILoadingContext {
  showLoading(value: boolean): void;
  loading: boolean;
}

const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

interface ILoadingProvider {
  children: React.ReactNode;
}

function LoadingProvider({ children }: ILoadingProvider) {
  const [loading, setLoading] = useState<boolean>(false);

  const showLoading = useCallback((value: boolean) => {
    setLoading(value);
  }, []);

  const values = useMemo(() => ({ showLoading, loading }), [showLoading, loading]);

  return (
    <LoadingContext.Provider value={values}>
      <div style={{ overflow: loading ? 'hidden' : 'auto', zIndex: 999999999999999 }}>{loading && <Loading />}</div>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading(): ILoadingContext {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error('useLoading must be used within a Loading Provider');
  }

  return context;
}

export { LoadingProvider, LoadingContext };
