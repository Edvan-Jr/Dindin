import './styles.css';

function Resumo() {
  return (
    <div className="container-resumo">
      <h3>Resumo</h3>
      <div className="linha-resumo">
        <span>Entradas</span>
        <span className='in'> R$ 0,00</span>
      </div>
      <div className="linha-resumo barra">
        <span>Saídas</span>
        <span className='out'> R$ 130,00</span>
      </div>
      <div className="linha-resumo">
        <span>Saldo</span>
        <span className='balance'> R$ 130,00</span>
      </div>
    </div>
  );
}

export default Resumo;