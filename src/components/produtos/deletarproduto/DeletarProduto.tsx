import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Produto from '../../../models/Produto';
import { buscar, deletar } from "../../../service/Service"

function DeletarProduto() {

    const navigate = useNavigate()

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
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

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`)
            alert('Produto apagado com sucesso')
            retornar()
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro de permissão')
            } else {
                alert('Erro ao deletar o produto.')
            }
        }
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <div className='w-1/3 mx-auto'>
                <h1 className='text-4xl text-center my-4 text-gray-800 font-bold'>Deletar produto</h1>
                <p className='text-center font-semibold mb-6 text-gray-700'>
                    Você tem certeza de que deseja apagar o produto a seguir?</p>
                <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>
                    <header 
                        className='py-3 px-6 text-center text-gray-800 font-bold text-2xl'>
                        Produto
                    </header>
                    <div className="p-6">
                        <p className='text-xl font-medium text-gray-800 mb-2'>{produto.nome}</p>
                        <p className='text-gray-600'>{produto.descricao}</p>
                    </div>
                    <div className="flex p-4 gap-4 bg-gray-50 border-t">
                        <button 
                            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200'
                            onClick={retornar}>
                            Cancelar
                        </button>
                        <button 
                            className='w-full text-slate-100 bg-indigo-500 hover:bg-indigo-600 flex items-center justify-center rounded-lg font-medium transition-colors duration-200'
                            onClick={deletarProduto}>
                            <span>Confirmar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto