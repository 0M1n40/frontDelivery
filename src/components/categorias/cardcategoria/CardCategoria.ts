import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='flex flex-col rounded-md overflow-hidden'>
            <Link to={`/categoria/${categoria.id}`}
                className='bg-red-600 text-white font-medium text-center py-3 px-5 
                hover:bg-red-700 transition duration-300 w-full'>
                {categoria.descricao}
            </Link>
          
            <div className="flex text-sm">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-1/2 text-slate-100 bg-indigo-500 hover:bg-indigo-700 
                        flex items-center justify-center py-1.5 transition duration-300'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='text-slate-100 bg-red-500 hover:bg-red-700 w-1/2 
                        flex items-center justify-center py-1.5 transition duration-300'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategoria;