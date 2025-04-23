import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaCategoria from "./components/categorias/listacategorias/ListaCategorias";
import CadastrarCategoria from "./components/categorias/cadastrarcategoria/CadastrarCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import FormProduto from "./components/produtos/formprodutos/FormProduto";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import Produto from "./pages/produto/Produto";

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
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/cadastrar/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

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
