import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import FormProduto from "./components/produtos/formprodutos/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import Produto from "./pages/produto/Produto";
import Categoria from "./pages/categoria/Categoria";

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="min-h-[80vh]">
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Cadastro de usuário */}
          <Route path="/usuarios/cadastrar" element={<Cadastro />} />

          {/* Categorias */}
          <Route path="/categorias" element={<Categoria />} />
          <Route path="/cadastrar" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          {/* <Route path="/formcategoria/" element={<FormCategoria />} /> */}

          {/* Produtos */}
          <Route path="/produtos" element={<Produto />} />
          <Route path="/cadastrarproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
