import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import SearchBar from "../../../components/searchbar/SearchBar"; 

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const { id } = useParams<{ id: string }>();
  
  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      alert('Erro');
    }
  }
  
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);
  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }
  
  function retornar() {
    navigate("/categorias");
  }
  
  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    
    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('cadastrou');
      } catch (error: any) {
        alert('deu erro');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('cadastrou');
      } catch (error: any) {
        alert('deu erro');
      }
    }
    
    setIsLoading(false);
    retornar();
  }
  
  return (
    <>
      <SearchBar page="category" /> 
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Categorias</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-md w-full mx-auto mt-4">
        <h2 className="text-xl font-medium text-center mb-6">
          Cadastrar nova Categoria
        </h2>
        
        <form onSubmit={gerarNovaCategoria} className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              placeholder="Nome da categoria"
              name="nome"
              className="w-full p-2 border-b border-gray-300 focus:outline-none"
              value={categoria.nome || ''}
              onChange={atualizarEstado}
            />
          </div>
          
          <button
            className="w-full py-3 bg-indigo-900 text-white rounded-md hover:bg-indigo-800"
            type="submit">
            {isLoading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormCategoria;

