import './Navbar.css';

function Navbar() {
  return (
    <>
     {/* Faixa vermelha no topo */}
     <div className="navbar-top w-full"></div>
    
    
    <div className="navbar-container">
      <div className="menu">
        <span className="menu-item active">Home</span>
        <span className="menu-item">Produto</span>
        <span className="menu-item">Categorias</span>
      </div>
    </div>
    </>
  );
}

export default Navbar;
