
import Produto from "./Produto"

export default interface Categoria {
    categoria: ReactNode
    id?: string,
    nome: string
    produto?: Produto[]
}

