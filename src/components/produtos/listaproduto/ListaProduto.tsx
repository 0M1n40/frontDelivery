
import { useState, useEffect } from "react";
import Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";
import { buscar } from "../../../service/Service";
import './ListaProduto.css'

interface ListaProdutoProps {
    atualizarLista: boolean;
    setAtualizarLista: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  function ListaProduto({ atualizarLista, setAtualizarLista }: ListaProdutoProps) {
    const [produto, setProduto] = useState<Produto[]>([]);
  
    async function buscarProduto() {
      try {
        await buscar('/produtos', setProduto);
      } catch (error: any) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      buscarProduto();
    }, []);
  
    useEffect(() => {
      if (atualizarLista) {
        buscarProduto();
        setAtualizarLista(false);
      }
    }, [atualizarLista]);
  
    return (
      <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <p className="cabecalho-produto">Produtos</p>
          <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produto.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }

export default ListaProduto;