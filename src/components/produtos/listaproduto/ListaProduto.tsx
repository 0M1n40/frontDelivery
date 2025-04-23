
import { useState, useEffect } from "react";
import Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";
import { buscar } from "../../../service/Service";

function ListaProduto() {

    const [produto, setProduto] = useState<Produto[]>([]);

    async function buscarProduto() {
        try {
            await buscar('/produtos', setProduto)

        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscarProduto()
    }, [])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
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