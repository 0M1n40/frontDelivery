import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../service/Service";

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategoria() {
        try {
            await buscar('/categoria', setCategorias)
        } catch (error: any) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscarCategoria()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategoria;

