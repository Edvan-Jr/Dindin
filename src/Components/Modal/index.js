import './styles.css';
import btnClose from '../../Assets/icon-close.svg';

function Modal({ setModal }) {
  return (
    <div className="backdrop-modal">
      <div className="container-modal">
        <div className="header-modal">
          <h2>Adicionar Registro</h2>
          <img className='btn-close' src={btnClose} onClick={() => setModal(false)} alt="Botão Fechar Modal" />
        </div>
        <div className="btns-credit-debit">
          <button id='btn-credit'>Entrada</button>
          <button id='btn-debit'>Saída</button>
        </div>
        <form action="">
          <div className='input-label'>
            <label htmlFor="">Valor</label>
            <input type="text" />
          </div>
          <div className='input-label'>
            <label htmlFor="">Categoria</label>
            <input type="text" />
          </div>
          <div className='input-label'>
            <label htmlFor="">Data</label>
            <input type="text" />
          </div>
          <div className='input-label'>
            <label htmlFor="">Descrição</label>
            <input type="text" />
          </div>
        </form>
        <button className='btn-insert'>Confirmar</button>
      </div>
    </div>
  );
}

export default Modal;