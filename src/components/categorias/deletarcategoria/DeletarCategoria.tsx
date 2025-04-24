import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { useEffect, useState } from "react"
import { buscar, deletar } from "../../../service/Service"


function DeletarCategoria() {
    
    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')){
                alert('Erro de permissão')
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)
            alert('Categoria apagada com sucesso')
            retornar()
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro de permissão')
            } else {
                alert('Erro ao deletar a categoria.')
            }
        }
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <div className='w-1/3 mx-auto'>
                <h1 className='text-4xl text-center my-4 text-gray-800 font-bold'>Deletar categoria</h1>
                <p className='text-center font-semibold mb-6 text-gray-700'>
                    Você tem certeza de que deseja apagar a categoria a seguir?</p>
                <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>
                    <header 
                        className='py-3 px-6 text-center text-gray-800 font-bold text-2xl'>
                        Categoria
                    </header>
                    <div className="p-6">
                        <p className='text-xl font-medium text-gray-800 mb-2'>{categoria.nome}</p>
                        
                    </div>
                    <div className="flex p-4 gap-4 bg-gray-50 border-t">
                        <button 
                            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200'
                            onClick={retornar}>
                            Cancelar
                        </button>
                        <button 
                            className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center rounded-lg font-medium transition-colors duration-200'
                            onClick={deletarCategoria}>
                            <span>Confirmar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria
