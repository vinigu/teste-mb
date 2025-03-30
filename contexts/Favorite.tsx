import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface IFavoriteMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  adult: boolean;
}

interface IFavoriteContext {
  favoriteMovies: IFavoriteMovie[];
  addFavorite(movie: IFavoriteMovie): void;
  removeFavorite(movieId: number): void;
}

const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

interface IFavoriteProvider {
  children: React.ReactNode;
}

function FavoriteProvider({ children }: IFavoriteProvider) {
  const [favoriteMovies, setFavoriteMovies] = useState<IFavoriteMovie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    if (storedFavorites) {
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const addFavorite = useCallback((movie: IFavoriteMovie) => {
    setFavoriteMovies((prev) => {
      if (!prev.find((fav) => fav.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  }, []);

  const removeFavorite = useCallback((movieId: number) => {
    setFavoriteMovies((prev) => prev.filter((movie) => movie.id !== movieId));
  }, []);

  const values = useMemo(
    () => ({
      favoriteMovies,
      addFavorite,
      removeFavorite,
    }),
    [favoriteMovies, addFavorite, removeFavorite]
  );

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite(): IFavoriteContext {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }

  return context;
}

export { FavoriteContext, FavoriteProvider };
