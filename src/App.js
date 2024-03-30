import './App.css';
import MainNavigation from './menu-de-hamburguer';
import { Box, CircularProgress, Container, Modal } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Rotas from './rota/api';
import React, { useEffect } from 'react';
import { buscarTodosAgendamentos } from './service/agendamento';
import teste from './service/testeApi';


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

function App() {
  const [reload, setReload] = React.useState(true);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const repet = () => {
    setReload(!reload)
  }
  useEffect(() => {
    teste().then((data) => {
        handleClose()
    }).catch((err) => {
      handleOpen()
    })
}, [reload]);
setTimeout(repet, 2000)
  return (
      <>  
        <ToastContainer autoClose="3000"/>
        <MainNavigation />
        <Container>
          <Rotas />
        </Container>

        <Modal
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '15%' }}>
            <CircularProgress /> CarregandoAPI....
        </Box>
      </Modal>
      </>
  );
}

export default App;
