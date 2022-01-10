import './styles.css';

function TableHead() {
  return (
    <div className="table-head">
      <div className="column-title" id='date'>Data</div>
      <div className="column-title" id='week-day'>Dia da Semana</div>
      <div className="column-title">Descrição</div>
      <div className="column-title">Categoria</div>
      <div className="column-title">Valor</div>
      <div className="column-title"></div>
    </div>
  );
}

export default TableHead;