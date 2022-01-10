import './styles.css';
import Filtro from '../Filtro';
import TransactionsList from '../TransactionsList';
import Resumo from '../Resumo';
import Modal from '../Modal';
import { useState } from 'react';

function Main() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container-main">
      <div className="container-filtro-table">
        <Filtro />
        <TransactionsList />
      </div>
      <div className="container-resumo-btn">
        <Resumo />
        <button className='btn-add' onClick={() => setModal(true)}>Adicionar Registro</button>
      </div>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default Main;