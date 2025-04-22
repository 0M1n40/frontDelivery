import axios from "axios";

const api = axios.create({
    baseURL: ''
})

export const buscar = async (url: string, setDados: Function, ) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const deletar = async (url: string, ) => {
    await api.delete(url)
}