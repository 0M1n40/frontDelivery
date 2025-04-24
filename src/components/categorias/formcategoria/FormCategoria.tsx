import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { ChangeEvent, useEffect, useState } from "react";
import "./formcategoria.css";
import BotaoCadastrar from "../../botaoCadastrar/BotaoCadastrar";
import BotaoAtualizar from "../../botaoCadastrar/BotaoAtualizar";

// interface FormCategoriaProps {
//   setAtualizarLista: React.Dispatch<React.SetStateAction<boolean>>;
// }

//{ setAtualizarLista }: FormCategoriaProps
function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
  } catch (error: any) {
      if (error.toString().includes('403')) {
      }
  }
}


useEffect(() => {
  if (id !== undefined) {
      buscarPorId(id)
  }
}, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias")
}

async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  setIsLoading(true)

  if (id !== undefined) {
      try {
          await atualizar(`/categorias`, categoria, setCategoria)
          alert('A Categoria foi atualizada com sucesso!')
      } catch (error: any) {
          if (error.toString().includes('403')) {
          } else {
              alert('Erro ao atualizar o tema.')
          }

      }
  } else {
      try {
          await cadastrar(`/categorias`, categoria, setCategoria)
          alert('A categoria foi cadastrado com sucesso!')
      } catch (error: any) {
          if (error.toString().includes('403')) {
          } else {
              alert('Erro ao cadastrar a categoria.')
          }

      }
  }
  retornar()
}

  return (
    <div className="form-categoria-container">
      <h1 className="form-titulo">
        {id === undefined ? "Cadastrar nova Categoria" : "Editar Categoria"}
      </h1>

      <form className="form-categoria" onSubmit={gerarNovaCategoria}>
        <div className="form-campo">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome da categoria"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <hr />
        </div>

        {isLoading ? (
          <div className="botao-form">
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          </div>
        ) : (
          id === undefined ? <BotaoCadastrar /> : <BotaoAtualizar />
        )}
      </form>
    </div>
  );
}

export default FormCategoria;
