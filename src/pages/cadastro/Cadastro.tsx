import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import imgCadastro from '../../utils/img/imgCadastro.png';
import Usuario from '../../models/Usuario';
import { useNavigate } from 'react-router-dom';
import BotaoCadastrar from '../../components/botaoCadastrar/BotaoCadastrar';
import { cadastrar } from '../../service/Service';

function Cadastro() {
    
    const navigate = useNavigate();
  
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  
    useEffect(() => {
      if (usuario.id !== 0 && usuario.id !== undefined) {
        retornar();
      }
    }, [usuario]);
  
    function retornar() {
      navigate('/home');
    }
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
      });
    }
  
    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      if (usuario.senha.length >= 8) {
        try {
          await cadastrar(`/usuarios/cadastrar`, usuario, setUsuario);
          alert('Usuário cadastrado com sucesso!');
        } catch (error) {
          alert('Erro ao cadastrar o usuário!');
        }
      } else {
        alert('A senha deve ter no mínimo 8 caracteres.');
      }
    }
  

    return (
      <div className="flex h-screen">
        <div className="bg-red-600 text-white flex flex-col justify-between items-center w-1/3 px-10 py-8">
          <h1 className="text-4xl font-light text-left leading-snug">
            Mais que uma <br />
            plataforma, uma <strong className="font-bold">vitrine</strong><br />
            para o seu delivery!
          </h1>
  
          <img
            src={imgCadastro}
            alt="Mulher sorrindo"
            className="mt-12 w-full max-w-none h-full object-cover"
          />
        </div>
  
        <div className="bg-gray-100 flex justify-center items-center w-2/3 p-6">
          <form className="w-full max-w-md space-y-6" onSubmit={cadastrarNovoUsuario}>
            <h2 className="text-2xl font-semibold text-gray-800">Criar conta</h2>
  
            <div>
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                value={usuario.nome}
                onChange={atualizarEstado}
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
              />
            </div>
  
            <div>
              <input
                type="email"
                placeholder="Usuário (email)"
                name="usuario"
                value={usuario.usuario}
                onChange={atualizarEstado}
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
              />
            </div>
  
            <div>
              <input
                type="text"
                placeholder="Foto"
                name="foto"
                value={usuario.foto}
                onChange={atualizarEstado}
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
              />
            </div>
  
            <div>
              <input
                type="password"
                placeholder="Senha"
                name="senha"
                value={usuario.senha}
                onChange={atualizarEstado}
                className="w-full border-b border-gray-400 bg-transparent focus:outline-none py-2"
              />
            </div>
  
            <BotaoCadastrar />
          </form>
        </div>
      </div>
    );
  }
  export default Cadastro;  


