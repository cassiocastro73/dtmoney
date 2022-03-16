import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Modal from 'react-modal';

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}

      >
        Cadastrar nova transação
      </Modal>

      <Dashboard />
     <GlobalStyle />
    </>
  );
}

export default App;
