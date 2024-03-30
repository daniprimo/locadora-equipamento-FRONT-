import axios from 'axios';

export const apiTesteApi = axios.create({
    baseURL: 'http://localhost:8080/teste'
});

export const apiProfessor = axios.create({
    baseURL: 'http://localhost:8080/professor'
});


export const apiAtendente = axios.create({
    baseURL: 'http://localhost:8080/atendente'
});

export const apiAgendamento = axios.create({
    baseURL: 'http://localhost:8080/agendamento'
});

export const apiItem = axios.create({
    baseURL: 'http://localhost:8080/item'
});
