
import Produto from "./Produto"

export default interface Categoria {
    id?: null | number,
    nome: string;
    produto?: Produto | null
}

