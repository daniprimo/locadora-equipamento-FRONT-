import { apiAgendamento } from "./api";



export const criandoUmNovoAgendamento = (data) => {
    const url = "";
    return apiAgendamento.post(url, data);
}

export const retirarNovoAgendamento = (data) => {
    const url = "/retirarAgendamento";
    return apiAgendamento.post(url, data);
}

export const buscarTodosAgendamentos = () => {
    const url = "";
    return apiAgendamento.get(url);
}


export const buscarTodosAgendamentosRetirados = () => {
    const url = '/emprestados';
    return apiAgendamento.get(url);
}

export const devolucaoAgendamento = (data) => {
    const url = '/emprestados';
    return apiAgendamento.post(url, data);
}

export const devolverAgendamento = (data) => {
    const url = '/devolver';
    return apiAgendamento.post(url, data);
}
