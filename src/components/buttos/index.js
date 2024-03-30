import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
import { retirarNovoAgendamento } from '../../service/agendamento';
import { useNavigate } from 'react-router-dom';

export default function Botao(props) {
    const navigate = useNavigate();

    const dado = {
      id: props.id,
      data: new Date().getDate()+"/"+new Date().getMonth()+"/"+new Date().getFullYear(),
      hora: new Date().getHours() +":"+new Date().getMinutes()
    }

    function handlerRetirar() {
      retirarNovoAgendamento(dado).then(() => {
          toast.success("Retirada com sucesso do agendamento: "+ props.id)
          navigate(0)
        }).catch((err) => {
          toast.error("Falha ao registrar a retirado.")
        })
    }
  
    return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons" style={{backgroundColor: 'blue'}}
      onClick={() => handlerRetirar()}>
        Retirar
      </Button>
      <Button variant="contained" style={{backgroundColor: 'red', color: 'white'}} disabled>
        Cancelar
      </Button>
    </Stack>
  );
}
