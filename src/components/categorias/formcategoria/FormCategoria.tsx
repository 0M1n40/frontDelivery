import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import BotaoCadastrar from "../../botaoCadastrar/BotaoCadastrar";


function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      alert("Erro ao buscar categoria");
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
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      }

      setIsLoading(false);
      setTimeout(() => navigate("/categorias"), 100); 
    } catch (error) {
      alert("Erro ao salvar a categoria.");
      // ToastAlerta("Erro ao salvar a categoria", "erro");
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-40">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={atualizarEstado}
          />
        </div>

        {isLoading ? (
          <div className="text-center text-lg">Carregando...</div>
        ) : (
          <button type="submit" className="w-full">
            <BotaoCadastrar />
          </button>
        )}
      </form>
    </div>
  );
}

export default FormCategoria;

