import { useState } from "react";
import ListaProduto from "../../components/produtos/listaproduto/ListaProduto";
import FormProduto from "../../components/produtos/formprodutos/FormProduto";

function Produto() {
  const [atualizarLista, setAtualizarLista] = useState(false);

  return (
    <div className="produto-container flex flex-col lg:flex-row items-start justify-center gap-6 p-4">
      <div className="w-full lg:w-2/3">
        <ListaProduto atualizarLista={atualizarLista} setAtualizarLista={setAtualizarLista} />
      </div>

      <div className="w-full lg:w-1/3">
        <FormProduto setAtualizarLista={setAtualizarLista} />
      </div>
    </div>
  );
}

export default Produto;
