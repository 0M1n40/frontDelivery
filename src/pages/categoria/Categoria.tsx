import  { useState } from 'react'
import ListaCategorias from '../../components/categorias/listacategorias/ListaCategorias';
import FormCategoria from '../../components/categorias/formcategoria/FormCategoria';

function Categoria() {
    const [atualizarLista, setAtualizarLista] = useState(false);

    return (
      <div className="min-h-screen bg-white p-4 ">
        <div className="produto-container ">
          <div className="w-full ">
            <ListaCategorias
              
            />
          </div>
  
          {/* <div className="w-full lg:w-1/3">
          <FormCategoria setAtualizarLista={setAtualizarLista} />
            <FormProduto setAtualizarLista={setAtualizarLista} />
          </div> */}
        </div>
      </div>
    );
}

export default Categoria