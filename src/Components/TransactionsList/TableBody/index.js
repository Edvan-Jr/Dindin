import './styles.css';
import iconEdit from '../../../Assets/icon-edit.svg';
import iconLixo from '../../../Assets/icon-lixo.svg';
import { useContext } from 'react';
import UserContext from '../../../Contexts/UserContext';
import {
  formatToMoney,
  formatToDate,
  capitalizeWord
} from '../../../Utils/formatters';

function TableBody() {
  const { transactions } = useContext(UserContext);

  return (
    <div className="table-body">
      {transactions.map(transaction => {
        return (
          <div className="table-line" key={transaction.id}>
            <div className="line-item">{formatToDate(transaction.date)}</div>
            <div className="line-item">{capitalizeWord(transaction.week_day)}</div>
            <div className="line-item">{transaction.description}</div>
            <div className="line-item">{transaction.category}</div>
            <div className="line-item">{formatToMoney(transaction.value)}</div>
            <div className="line-item icones">
              <img src={iconEdit} alt="ícone editar transação" />
              <img src={iconLixo} alt="ícone excluir transação" />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default TableBody;