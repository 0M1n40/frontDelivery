import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";

function ListaCategorias() {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    // Função para buscar as categorias
    async function buscarCategorias() {
        try {
            const response = await fetch('/categorias', {
                method: 'GET',
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCategorias(data);
            } else {
                throw new Error('Erro ao buscar categorias');
            }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
                alert("Você foi desconectado. Faça login novamente.");
            } else {
                alert("Erro ao carregar categorias: " + error.message);
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
    }, [token]);

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
            <div className="container flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categorias.map((categoria) => (
                        <CardCategoria key={categoria.id} categoria={categoria} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default ListaCategorias;
