import "./Home.css";
import home from "../../utils/img/Home.png";
import BotaoNovoProduto from "../../components/botaoNovoProduto/BotaoNovoProduto";
import ModalProduto from "../../components/modalProduto/Modal-Produto"



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
          <div className="min-h-screen bg-white p-4 lg:p-32 box-border">
          <ModalProduto/></div>

          
        </div>
      </div>
    </>
  );
}

export default Home;

