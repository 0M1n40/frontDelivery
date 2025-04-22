
import Produto from "./Produto"

export default interface Categoria {
    id?: string,
    nome: string
    produto?: Produto[]
}

