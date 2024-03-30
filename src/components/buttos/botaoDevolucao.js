import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
import { devolverAgendamento } from '../../service/agendamento';
import { useNavigate } from 'react-router-dom';

export default function BotaoDevolucao(props) {
    const navigate = useNavigate();

    const dado = {
      id: props.id,
      data: new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),
      hora: new Date().getHours() +":"+new Date().getMinutes()
    }

    function handlerRetirar() {
        devolverAgendamento(dado).then((data) => {
          toast.success("Devolucao com sucesso do agendamento: "+ props.id)
          navigate(0)
        }).catch((err) => {
          toast.error("Falha ao registrar a devolução.")
        })
    }
  
    return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" style={{backgroundColor: '#92e30a', color: 'black'}}
      onClick={() => handlerRetirar()}>
        Devolver
      </Button>
    </Stack>
  );
}
