import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({ nome: "" });
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

  function retornar() {
    navigate("/categorias");
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
    } catch (error) {
      alert("Erro ao salvar a categoria.");
    } finally {
      setIsLoading(false);
      retornar();
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

        <button
          className="rounded text-white bg-indigo-500 hover:bg-indigo-700 w-full py-2 flex justify-center"
          type="submit"
        >
          {isLoading ? "Carregando..." : id === undefined ? "Cadastrar" : "Atualizar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
