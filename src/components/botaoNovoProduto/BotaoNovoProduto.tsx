import './BotaoNovoProduto.css';
import { Link } from 'react-router-dom';

function BotaoNovoProduto() {
  return (
    <Link to="/produtos" className="botao-novo-produto">
      <span className="button-text">NOVO PRODUTO</span>
    </Link>
  );
}

export default BotaoNovoProduto;
