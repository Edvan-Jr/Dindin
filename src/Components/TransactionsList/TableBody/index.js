import './styles.css';
import iconEdit from '../../../Assets/icon-edit.svg';
import iconLixo from '../../../Assets/icon-lixo.svg';

function TableBody() {
  return (
    <div className="table-body">
      <div className="table-line">
        <div className="line-item">01/01/2022</div>
        <div className="line-item">Sábado</div>
        <div className="line-item">Óleos Cannabis</div>
        <div className="line-item">Saída</div>
        <div className="line-item">R$130,00</div>
        <div className="line-item icones">
          <img src={iconEdit} alt="ícone editar transação" />
          <img src={iconLixo} alt="ícone excluir transação" />
        </div>
      </div>
    </div>
  );
}

export default TableBody;