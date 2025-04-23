import { useState, useEffect } from "react";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar, cadastrar } from "../../../service/Service";
import SearchBar from "../../../components/searchbar/SearchBar";
import BotaoCadastrar from "../../botaoCadastrar/BotaoCadastrar";

function ListaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [nome, setNome] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            console.log(error);
        }
    }

    async function cadastrarCategoria(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (nome.trim() === '') {
            alert('Preencha o nome da categoria');
            return;
        }

        setIsLoading(true);

        try {
            await cadastrar('/categorias', { nome: nome }, setCategorias);
            setNome('');
            await buscarCategoria();
        } catch (error: any) {
            console.log(error);
            alert('Erro ao cadastrar categoria');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarCategoria();
    }, [categorias.length]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <div className="mb-8">
                    <SearchBar page="category" />
                </div>

                <div className="flex justify-between gap-8">
                    <div className="w-1/2">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-bold">Categorias</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {categorias.map((categoria) => (
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <div className="bg-white rounded-lg shadow p-6 w-4/5">
                            <h2 className="text-lg font-medium text-center mb-6">
                                Cadastrar nova Categoria
                            </h2>

                            <form onSubmit={cadastrarCategoria} className="flex flex-col gap-6">
                                <input
                                    type="text"
                                    placeholder="Nome da categoria"
                                    name="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                                />

                                <button type="submit" className="w-full"> Enviar
                                    {/* <BotaoCadastrar /> */}
                                    
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaCategoria;
