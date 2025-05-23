import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080',
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const buscarCategoriaPorNome = async (nome: string) => {
    const resposta = await api.get(`/categorias/nome/${nome}`);
    return resposta.data;
};

export const deletar = async (url: string) => { 
    await api.delete(url)

}

