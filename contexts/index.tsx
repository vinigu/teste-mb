import { LoadingProvider } from "@contexts/Loading";
import { ModalProvider } from "@contexts/Modal";

interface IAppContext {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppContext) {
  return (
    <LoadingProvider>
      <ModalProvider>{children}</ModalProvider>
    </LoadingProvider>
  );
}
