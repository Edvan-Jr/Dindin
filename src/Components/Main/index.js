import './styles.css';
import Filtro from '../Filtro';
import TransactionsList from '../TransactionsList';
import Resumo from '../Resumo';
import Modal from '../Modal';
import { useContext } from 'react';
import UserContext from '../../Contexts/UserContext';

function Main() {
  const { modal, setModal } = useContext(UserContext);

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
      {modal && <Modal />}
    </div>
  );
}

export default Main;