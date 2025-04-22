import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categorias/listacategorias/ListaCategorias';
import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';

function App() {
  return (
    <Router>
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/cadastrar/:id" element={<CadastrarCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/" element={<ListaCategoria />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          {/* Defina outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


