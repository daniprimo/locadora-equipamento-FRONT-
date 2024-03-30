import axios from 'axios';

export const apiTesteApi = axios.create({
    baseURL: 'https://locadora-pr6k.onrender.com/teste'
});

export const apiProfessor = axios.create({
    baseURL: 'https://locadora-pr6k.onrender.com/professor'
});


export const apiAtendente = axios.create({
    baseURL: 'https://locadora-pr6k.onrender.com/atendente'
});

export const apiAgendamento = axios.create({
    baseURL: 'https://locadora-pr6k.onrender.com/agendamento'
});

export const apiItem = axios.create({
    baseURL: 'https://locadora-pr6k.onrender.com/item'
});
