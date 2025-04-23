import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import BotaoCadastrar from "../../botaoCadastrar/BotaoCadastrar";
import BotaoAtualizar from "../../botaoCadastrar/BotaoAtualizar";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [categoriaNome, setCategoriaNome] = useState<string>("");
  const [categoria, setCategoria] = useState<Categoria>({ id: "0", nome: "" });

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({ ...produto, categoria });
  }, [categoria]);

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto);
  }

  async function buscarCategoria(nome: string) {
    try {
      await buscar(`/categorias/nome/${nome}`, setCategoria);
    } catch {
      setCategoria({ id:"0", nome });
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({ ...produto, [e.target.name]: e.target.value, categoria });
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto);
        ToastAlerta("Produto atualizado com sucesso", "sucesso");
      } else {
        await cadastrar(`/produtos`, produto, setProduto);
        ToastAlerta("Produto cadastrado com sucesso", "sucesso");
      }
    } catch {
      ToastAlerta("Erro ao salvar o produto", "erro");
    }

    setIsLoading(false);
    navigate("/produtos");
  }

  return (
    <form className="form-produto" onSubmit={gerarNovoProduto}>
      <div className="form-campo">
        <label htmlFor="nome">Nome do Produto</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome do produto"
          value={produto.nome}
          onChange={atualizarEstado}
        />
        <hr />
      </div>

      <div className="form-campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          name="descricao"
          placeholder="Digite a descrição"
          value={produto.descricao}
          onChange={atualizarEstado}
        />
        <hr />
      </div>

      <div className="form-campo">
        <label htmlFor="preco">R$</label>
        <input
          type="number"
          name="preco"
          placeholder="Digite o preço"
          value={produto.preco || ""}
          onChange={atualizarEstado}
        />
        <hr />
      </div>

      <div className="form-campo">
        <label htmlFor="estoque">Quantidade em estoque</label>
        <input
          type="number"
          name="estoque"
          placeholder="Digite o estoque"
          value={produto.estoque || ""}
          onChange={atualizarEstado}
        />
        <hr />
      </div>

      <div className="form-campo">
        <label htmlFor="categoria">Categoria</label>
        <input
          type="text"
          name="categoria"
          placeholder="Digite o nome da categoria"
          value={categoriaNome}
          onChange={(e) => {
            setCategoriaNome(e.target.value);
            buscarCategoria(e.target.value);
          }}
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
      ) : id === undefined ? (
        <BotaoCadastrar />
      ) : (
        <BotaoAtualizar />
      )}
    </form>
  );
}

export default FormProduto;
