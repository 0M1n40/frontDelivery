import { useState, useEffect } from "react";
import Produto from "../../models/Produto";
import "./ModalProduto.css";
import CardProduto from "../produtos/cardproduto/CardProduto";
import { buscar } from "../../service/Service";

function ModalProduto() {
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

    return (
        <div className="produto-container">
            <div className="produtos">
                {produto.slice(0, 4).map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    );
}

export default ModalProduto;
