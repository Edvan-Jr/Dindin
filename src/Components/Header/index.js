import './styles.css';
import logo from '../../Assets/Logo.svg';

function Header() {
  return (
    <div className="container-header">
      <img src={logo} alt="Logo Dindin" />
    </div>
  );
}

export default Header;