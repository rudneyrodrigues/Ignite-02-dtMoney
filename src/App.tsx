import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false);

  function handleOpenNewTransactionModalOpen () {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  function handleCloseNewTransactionModalOpen () {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModalOpen}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />
    </>
  );
}
