import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {

  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsContext.Provider value = {[]}>
      <Header 
      openNewTransaction={handleOpenTransactionModal}        
      ></Header>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <Dashboard />
     <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
