import React, { useEffect, useState } from "react";
import { buscarTodosAgendamentosRetirados } from "../../service/agendamento";
import { toast } from "react-toastify";
import ListaDeRetirados from "../../components/listaDeTabelas/listaRetirados";

export default function ListarAgendamentosRetirados() {

    const [agendamento, setAgendamento] = useState([]);
    const [reload, setReload] = useState()

    useEffect(() => {
            buscarTodosAgendamentosRetirados().then((data) => {
                console.log(data.data)
                setAgendamento(data.data)
            }).catch((err) => {
                toast.error("Erro ao buscar agendamentos")
            })
    }, [reload]);


    return (<>
        <h1>Emprestados</h1>
        <br/>
        <ListaDeRetirados 
            data={agendamento}
            setReload={setReload}
        />
    </>)
}