import ListaProduto from "../../components/produtos/listaproduto/ListaProduto"
import "./Home.css";
import home from "../../utils/img/Home.png";
import BotaoNovoProduto from "../../components/botaoNovoProduto/BotaoNovoProduto";



function Home() {
  return (
    <>
      <div className="home-container min-h-screen flex flex-col justify-between">
        <div
          className="home-hero text-white px-1 py-22"
          style={{
            backgroundImage: `url(${home})`,
          }}
        >
          <BotaoNovoProduto />
        </div>

        <div className=" flex flex-col items-center justify-center gap-4 mt-10 ">
          <h2 className="text-center text-3xl font-semibold text-gray-800">
            Meus produtos
            
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;

