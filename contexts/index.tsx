import { FavoriteProvider } from "@contexts/Favorite";
import { LoadingProvider } from "@contexts/Loading";
import { ModalProvider } from "@contexts/Modal";

interface IAppContext {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppContext) {
  return (
    <LoadingProvider>
      <FavoriteProvider>
        <ModalProvider>{children}</ModalProvider>
      </FavoriteProvider>
    </LoadingProvider>
  );
}
