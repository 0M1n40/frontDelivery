import './BotaoCadastrar.css';

interface BotaoCadastrarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  texto?: string;
}

function BotaoCadastrar({ texto = "Cadastrar", ...props }: BotaoCadastrarProps) {
  return (
    <button className="botao-cadastrar" {...props}>
      {texto}
    </button>
  );
}

export default BotaoCadastrar;

