import "./Home.css";
import home from "../../utils/img/Home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container max-h-screen flex flex-col justify-between">
      <div
  className="home-hero text-white px-10 py-20"
  style={{
    backgroundImage: `url(${home})`,
  }}
>
  <div className="content flex flex-col items-center justify-center gap-4">
    <Link
      to="/novoproduto"
      className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg shadow-md transition duration-300"
    >
      NOVO PRODUTO
    </Link>

  </div>
</div>

        <div className="text-center py-16 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800">Meus produtos</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
