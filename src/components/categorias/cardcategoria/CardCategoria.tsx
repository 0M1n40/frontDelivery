import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <Link 
            to={`/categoria/${categoria.id}`}
            className="bg-red-600 text-white font-medium text-center py-3
                       rounded-md hover:bg-red-700 transition duration-300 w-full"
        >
            {categoria.nome}
        </Link>
    );
}

export default CardCategoria;

