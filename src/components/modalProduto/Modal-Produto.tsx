import { useState, useEffect } from "react";
import Produto from "../../models/Produto";
import CardProduto from "./../produtos/cardproduto/CardProduto";
import { buscar } from "../../service/Service";
import './Modal-Produto.css'

function ModalProduto() {
    const [ultimosProdutos, setUltimosProdutos] = useState<Produto[]>([]);

    useEffect(() => {
      buscar('/produtos', (todosProdutos: Produto[]) => {
        const ultimos = todosProdutos.slice(-4);
        setUltimosProdutos(ultimos);
      });
    }, []);
  
    return (
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <p className="cabecalho-produto">Meus produtos</p>
          <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ultimosProdutos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default ModalProduto;
