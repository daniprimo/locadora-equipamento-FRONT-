import React, { useEffect, useState } from "react";
import { buscarTodosAgendamentos } from "../../service/agendamento";
import { toast } from "react-toastify";
import ListaDeTabelas from "../../components/listaDeTabelas";
import { Box, CircularProgress, Modal } from "@mui/material";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

export default function ListarAgendamentos() {
    

    const [agendamento, setAgendamento] = useState([]);
    const [reload, setReload] = useState()

    useEffect(() => {
            buscarTodosAgendamentos().then((data) => {
                console.log(data.data)
                setAgendamento(data.data)
            }).catch((err) => {
                toast.error("Erro ao buscar agendamentos")
            })
    }, [reload]);


    return (<>
        <h1>Agendamentos</h1>
        <br/>
        <ListaDeTabelas 
            data={agendamento}
            setReload={setReload}
        />

    </>)
}