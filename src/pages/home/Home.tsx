import "./Home.css";
import home from "../../utils/img/Home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container min-h-screen flex flex-col justify-between">
      <div className="home-hero text-white px-1 py-22"
  style={{
    backgroundImage: `url(${home})`,
  }}
>
  
  <Link to="/categorias">
          <span className="menu-sair">Sair</span>
        </Link>
   
  <div className="bg-amber-400 m-auto ">
    <Link
      to="/novoproduto"
      className="botao-novo-produto"
    >
      NOVO PRODUTO
    </Link>

  </div>
</div>

    <div className=" flex flex-col items-center justify-center gap-4 mt-10 ">
          <h2 className="text-center text-3xl font-semibold text-gray-800">Meus produtos</h2>
        </div>
        </div>
     
    </>
  );
}

export default Home;
