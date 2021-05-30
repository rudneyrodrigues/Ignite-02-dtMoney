import { useState } from 'react';
import Modal from 'react-modal';

import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false);

  function handleNewTransactionModalOpenOrClose () {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header
        onOpenNewTransactionModal={handleNewTransactionModalOpenOrClose}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleNewTransactionModalOpenOrClose}
      />
    </TransactionsProvider>
  );
}
