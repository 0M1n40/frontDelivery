
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categorias/listacategorias/ListaCategorias';
import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';


function App() {
  return (
    
    <Router>
      <Navbar />
      <div className="min-h-[80vh]">
        
        <Routes>
          
           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
          <Route path="/cadastrar/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          {/* Defina outras rotas conforme necessário */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;