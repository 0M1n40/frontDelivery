import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import loogo2 from "../../utils/img/loogo2.png";
import { ReactNode } from 'react';


function Navbar() {

  let component: ReactNode

  const location = useLocation()
  if(location.pathname !== "/usuarios/cadastrar") {
    component = (
      <>
     {/* Faixa vermelha no topo */}
     <div className="navbar-top w-full bg-red-600 p-2 flex items-center"> 
  <Link to="/home">
    <img
      src={loogo2}
      alt="Imagem Página Home"
      className="h-10 w-auto cursor-pointer" // controla a altura, largura se ajusta automaticamente
    />
  </Link>
</div>

    
    
    <div className="navbar-container ">
      <div className="menu ">
      <Link to="/home" className="menu-item">Home </Link>
      <Link to="/produtos" className="menu-item">Produto </Link>
      <Link to="/categorias" className="menu-item">Categorias </Link>
      <Link to="/usuarios/cadastrar" className="menu-sair">Sair
          </Link>
       

        
      </div>
    </div>
    </>

    )
  }

  return(
    <>{component}</>
  )
//   return (
//     <>
//      {/* Faixa vermelha no topo */}
//      <div className="navbar-top w-full bg-red-600 p-2 flex items-center"> 
//   <Link to="/home">
//     <img
//       src={loogo2}
//       alt="Imagem Página Home"
//       className="h-10 w-auto cursor-pointer" // controla a altura, largura se ajusta automaticamente
//     />
//   </Link>
// </div>

    
    
//     <div className="navbar-container ">
//       <div className="menu ">
//       <Link to="/home" className="menu-item">Home </Link>
//       <Link to="/produtos" className="menu-item">Produto </Link>
//       <Link to="/categorias" className="menu-item">Categorias </Link>
//       <Link to="/usuarios/cadastrar" className="menu-sair">Sair
//           </Link>
       

        
//       </div>
//     </div>
//     </>
//   );
}

export default Navbar;

