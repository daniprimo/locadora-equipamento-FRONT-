import { apiAtendente } from "./api";



export const buscarAtendentePorId = (id) => {
    const url = `/atendentePorCodigo/${id}`;
    return apiAtendente.get(url);
}

export const registrarAtendente = (data) => {
    const url = "";
    return apiAtendente.post(url, data);
}

