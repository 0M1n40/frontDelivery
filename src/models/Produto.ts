import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
    id?: string,
    nome: string,
    descricao: string,
    preco: number,
    estoque: number,
    categoria?: Categoria,
    usuario?: Usuario
}