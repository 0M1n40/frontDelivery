import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { atualizar, buscar, cadastrar, buscarCategoriaPorNome } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { ChangeEvent, useEffect, useState } from "react";
import "./formproduto.css";
import BotaoCadastrar from "../../botaoCadastrar/BotaoCadastrar";
import BotaoAtualizar from "../../botaoCadastrar/BotaoAtualizar";

interface FormProdutoProps {
    setAtualizarLista: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
function FormProduto({ setAtualizarLista }: FormProdutoProps) {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({
        nome: "",
        descricao: "",
        preco: 0,
        estoque: 0,
        categoria: { id: null, nome: "" }
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoriaNome, setCategoriaNome] = useState<string>("");
    const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      buscar(`/produtos/${id}`, setProduto).catch(() =>
        ToastAlerta("Erro ao buscar produto", "erro")
      );
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  async function buscarCategoria(nome: string) {
    try {
      if (nome.length > 2) {
        const resposta = await buscarCategoriaPorNome(nome);
        if (resposta.length === 1) {
          setProduto({
            ...produto,
            categoria: {
              id: resposta[0].id,
              nome: resposta[0].nome,
            },
          });
        } else {
          setProduto({
            ...produto,
            categoria: {
              id: null,
              nome: nome,
            },
          });
        }
      }
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
      ToastAlerta("Erro ao buscar categoria", "erro");
    }
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto);
        ToastAlerta("O Produto foi atualizado com sucesso!", "sucesso");
      } else {
        await cadastrar(`/produtos`, produto, setProduto);
        ToastAlerta("O Produto foi cadastrado com sucesso!", "sucesso");
        setAtualizarLista(true);
      }
      navigate("/produtos");
    } catch {
      ToastAlerta("Erro ao salvar o produto.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="form-produto-container">
      <h1 className="form-titulo">
        {id === undefined ? "Cadastrar novo Produto" : "Editar Produto"}
      </h1>

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
        ) : (
          id === undefined ? <BotaoCadastrar /> : <BotaoAtualizar />
        )}
      </form>
    </div>
  );
}

export default FormProduto;