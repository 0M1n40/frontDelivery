import maisProdutosIcon from './../../assets/plusInCircle.svg'

function BotaoMaisProdutos() {
  return (
    <button aria-label="Mais Produtos">
      <img src={maisProdutosIcon} alt="Mais Produtos" />
    </button>
  );
}

export default BotaoMaisProdutos;
