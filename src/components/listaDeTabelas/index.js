import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Botao from '../buttos';


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} style={{marginBottom: 2, backgroundColor: '#dcedc8'}}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.id}</TableCell>
        <TableCell align="center">{row.professorResponse.nome}</TableCell>
        <TableCell align="center">{row.dataAgendado}</TableCell>
        <TableCell align="center">{row.horaAgendado}</TableCell>
        <TableCell align="center">{row.quantidadeItens}</TableCell>
        <TableCell>
            <Botao id={row.id} setReload={props.setReload}/>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Lista de Equipamentos Reservados
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Codigo</TableCell>
                    <TableCell align="center">Produto</TableCell>
                    <TableCell align="center">Categora</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.itens.map((historyRow) => (
                    <TableRow key={historyRow.codigo}>
                      <TableCell align="center">{historyRow.codigo}</TableCell>
                      <TableCell align="center">{historyRow.nomeDoItem}</TableCell>
                      <TableCell align="center">{historyRow.categoriaResponse.nome}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function ListaDeTabelas(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Agendamento</TableCell>
            <TableCell align="center">Professor</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Hora</TableCell>
            <TableCell align="center">Itens</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          {props.data.map((data) => (
            <Row key={data.id} row={data} setReload={props.setReload}/>
          ))}  
          {/*rows.map((row) => (
            <Row key={row.name} row={row} />
          ))*/}
        </TableBody>
      </Table>
    </TableContainer>
  );
}