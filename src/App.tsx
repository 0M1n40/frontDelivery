
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categorias/listacategorias/ListaCategorias';
import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import FormCategoria from './components/categorias/formcategoria/FormCategoria';

function App() {
  return (
    <Router>
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<ListaCategoria />} />
           <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/formcategoria/:id" element={<FormCategoria />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



