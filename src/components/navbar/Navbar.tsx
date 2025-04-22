import './Navbar.css';

function Navbar() {
  return (
    <>
      {/* Faixa vermelha no topo */}
      <div className="navbar-top w-full"></div>

      {/* Faixa branca com os itens da navbar */}
      <div className="navbar-bottom w-full">
        <div className="flex gap-4">
          <span className="menu-item">Home</span>
          <span className="menu-item">Produto</span>
          <span className="menu-item">Categoria</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
