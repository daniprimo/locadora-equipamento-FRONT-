import { apiItem } from "./api";



export const buscarTodosItensDisponivel = () => {
    return apiItem.get();
}

export const criarNovoItem = (data) => {
    return apiItem.post("",data);
}

export const buscarCategoriaDisponivel = () => {
    const url = '/categoria';
    return apiItem.get(url);
}

export const cadastrarCategoria = (data) => {
    const url = '/categoria';
    return apiItem.post(url, data);
}

