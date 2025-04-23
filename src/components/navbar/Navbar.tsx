
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
     {/* Faixa vermelha no topo */}
     <div className="navbar-top w-full"></div>
    
    
    <div className="navbar-container ">
      <div className="menu ">
      <Link to="/home" className="menu-item">Home </Link>
      <Link to="/produtos" className="menu-item">Produto </Link>
      <Link to="/categorias" className="menu-item">Categorias </Link>
       

        
      </div>
    </div>
    </>
  );
}

export default Navbar;
