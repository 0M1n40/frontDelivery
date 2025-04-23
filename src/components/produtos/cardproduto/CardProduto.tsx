import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import './CardProduto.css'

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="card-produto">
      <img
        alt={produto.nome}
        className="imagem-produto"
      />

      <div className="info-container">
        <h2 className="nome-produto">{produto.nome}</h2>
        <span className="preco-produto">R$ {produto.preco}</span>
      </div>

      <div className="botoes-container">
        <Link to={`/editarproduto/${produto.id}`} className="botao editar">Editar</Link>
        <Link to={`/deletarproduto/${produto.id}`} className="botao deletar">Deletar</Link>
      </div>
    </div>
  )
}

export default CardProduto
