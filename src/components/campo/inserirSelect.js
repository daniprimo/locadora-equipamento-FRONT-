import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Modal } from '@mui/material';
import FormularioTipo from '../formularioTipo';
import Campo from './inserirTexto';
import { cadastrarCategoria } from '../../service/item';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CampoSelect(props) {
  const [age, setAge] = React.useState('');
  const [dadoInterno, setDadoInter] = React.useState();
  const [novaCategoria, setNovaCategoria] = React.useState()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const data = {
    nome: novaCategoria
  }

  function handleSubmit() {
      cadastrarCategoria(data)
        .then((data) => {
          props.setReload(!props.reload);
          toast.success("Categoria "+ 
          data.data.id +" cadastrada")
          handleClose()
        }).catch((err) => {
          toast.error("Falhar ao cadastrar categoria")
        })
  }

  return (
    <>
    <Box sx={{ minWidth: 120, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.labelSelect}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={dadoInterno}
          label={props.labelSelect}
          onChange={(e) => {
            props.setDado(e.target.value.nome)
            setDadoInter(e.target.value.nome)
            props.setidCategoria(e.target.value.id)
          }}
        >
          
          <MenuItem value={""}>Novo Tipo{
            <Button onClick={handleOpen}  >
                <AddCircleOutlineIcon />
            </Button>
            }</MenuItem>

          {props.opcoes.map((op, index) => {
            return(
                <MenuItem key={index} value={op}>{op.nome}</MenuItem>  
            )
          })}
        </Select>
      </FormControl>
    </Box>


    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '20%' }}>
          <h2 id="child-modal-title">Nova Categoria</h2>
              <Campo 
                label={"Categoria"}
                dado={novaCategoria}
                setDado={setNovaCategoria}
              />            
            <Button variant="outlined"
                        color="primary"
                        onClick={(event) => handleSubmit(event)}>
                    Cadastrar
                </Button>
        </Box>
      </Modal>

    </>
  );

}



