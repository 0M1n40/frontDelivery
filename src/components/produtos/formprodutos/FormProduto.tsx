import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProduto() {

    const navigate = useNavigate();

const [produto, setProduto] = useState<Produto>({} as Produto)
    const [isLoading, setIsLoading] = useState<boolean>(false)



    const { id } = useParams<{ id: string }>();


async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error) {
            ToastAlerta('Erro ao buscar produto', 'erro');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/produtos")
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                ToastAlerta('O Produto foi atualizado com sucesso!', 'sucesso');
            } catch (error: any) {
                ToastAlerta('Erro ao atualizar o produto.', 'erro');
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);
                ToastAlerta('O Produto foi cadastrado com sucesso!', 'sucesso');
            } catch (error: any) {
                ToastAlerta('Erro ao cadastrar o produto.', 'erro');
            }
        }

        setIsLoading(false)
        retornar()
        
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Digite o nome do produto"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormProduto;