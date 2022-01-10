import './styles.css';
import iconFiltro from '../../Assets/icon-filtro.svg';

function Filtro() {
  return (
    <div className="container-filtro">
      <button className='open-filters-button'>
        <img src={iconFiltro} alt="Ícone Filtro" />
        Filtrar
      </button>
    </div>
  );
}

export default Filtro;