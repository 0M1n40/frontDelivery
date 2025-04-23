
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categorias/listacategorias/ListaCategorias';
import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';



function App() {
  return (
    
    <Router>
      <Navbar />
      
      <div className="min-h-[80vh]">
        
        <Routes>
          <Route path="/usuarios/cadastrar" element={<Cadastro />} />
           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
          <Route path="/cadastrar/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/categorias" element={<ListaCategoria />} />
           <Route path="/produto" element={<ListaProduto />} />
 <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Route path="/produto" element={<ListaProduto />} />
      <Route path="/cadastrarproduto" element={<FormProduto />} />
      <Route path="/editarproduto/:id" element={<FormProduto  />} />
      <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
      <Route path="/editarproduto/:id" element={<FormProduto  />} />
      <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
      </Routes>
         <Footer />
          {/* Defina outras rotas conforme necessário */}
   
       
      </div>

export default App;