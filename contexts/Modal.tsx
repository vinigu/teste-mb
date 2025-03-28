/* eslint-disable import/no-cycle */
import Modal from '@components/Modal';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface IShowModal {
  modalIsOpen: boolean;
  modalData?: React.ReactNode;
  fullScreen?: boolean;
}

interface IModalContext {
  showModal({ modalIsOpen, modalData }: IShowModal): void;
  isModalOpen: boolean;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

interface IModalProvider {
  children: React.ReactNode;
}

function ModalProvider({ children }: IModalProvider) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [data, setData] = useState<React.ReactNode>();
  const [isFull, setFull] = useState(false);

  const showModal = useCallback(({ modalIsOpen, modalData, fullScreen = false }: IShowModal) => {
    setIsModalOpen(modalIsOpen);
    setData(modalData);
    setFull(fullScreen);
  }, []);

  const values = useMemo(() => ({ showModal, isModalOpen }), [isModalOpen, showModal]);

  return (
    <ModalContext.Provider value={values}>
      <div style={{ overflow: isModalOpen ? 'hidden' : 'auto' }}>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} fullScreen={isFull}>
            {data}
          </Modal>
        )}
      </div>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a Modal Provider');
  }

  return context;
}

export { ModalProvider, ModalContext };
