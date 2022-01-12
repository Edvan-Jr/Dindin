import './styles.css';
import { useContext } from 'react';
import UserContext from '../../Contexts/UserContext';
import { formatToMoney } from '../../Utils/formatters';

function Resumo() {
  const { resumo } = useContext(UserContext);

  return (
    <div className="container-resumo">
      <h3>Resumo</h3>
      <div className="linha-resumo">
        <span>Entradas</span>
        <span className='in'>{formatToMoney(resumo.credit)}</span>
      </div>
      <div className="linha-resumo barra">
        <span>Saídas</span>
        <span className='out'>{formatToMoney(resumo.debit)}</span>
      </div>
      <div className="linha-resumo">
        <span>Saldo</span>
        <span className='balance'>{formatToMoney(resumo.balance)}</span>
      </div>
    </div>
  );
}

export default Resumo;