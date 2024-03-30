import { apiProfessor } from "./api";



export const buscarProfessorPeloCpf = (cpf) => {
    const url = `/buscarPorCpf/${cpf}`;
    return apiProfessor.get(url);
}

export const registrarProfessor = (data) => {
    const url = "";
    return apiProfessor.post(url, data);
}

