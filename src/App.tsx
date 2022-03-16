import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

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
    <>
      <Header 
      openNewTransaction={handleOpenTransactionModal}        
      ></Header>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <Dashboard />
     <GlobalStyle />
    </>
  );
}

export default App;
