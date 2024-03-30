import { Button, FormControl, Icon, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { buscarTodosItensDisponivel } from "../../service/item";
import { green } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import CustomizedTables from "../tabelaDosItens/intens";

export default function ItensAgendamentos(props) {
    const [consoleItem, setConsoleItem] = useState()
    const [nomeItem, setNomeItem] = useState()

    const [dataItens, setDataItens] = useState([])

    const [dataAtual, setDataAtual] = useState({})
    const [addData, setAddData] = useState([])


    useEffect(() => {
        handlerBuscarOsItens()
        var listaId = []
        addData.forEach(item => {
            listaId.push(item.codigo)
        })
        console.log(listaId)
        props.setListaItensRequest(listaId)

    },[addData, addData])

    function handleSubmit(event) {
        event.preventDefault();
        setAddData([...addData, dataAtual])
        setNomeItem("")
    }

   function handlerSetarInformacoes(e) {
        setConsoleItem(e.codigo)
        setNomeItem(e.nomeDoItem)
       setDataAtual(e)
    }

    function handlerBuscarOsItens() {
        buscarTodosItensDisponivel()
            .then((data) => {
                 setDataItens(data.data);
            }).catch((err) => {
                 console.log(err)
            })
    }

    return (
        <React.Fragment>
            <h4>Equipamento.</h4>

        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <FormControl sx={{ m: 1, minWidth: '20%' }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Item</InputLabel>         
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={consoleItem}
                                    label="Responsavel"
                                    autoWidth
                                    onChange={(e) => handlerSetarInformacoes(e.target.value)}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {dataItens.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item}>
                                        {item.categoriaResponse.nome} - {item.nomeDoItem}</MenuItem>
                                    )
                                })}
                                </Select>
                        </FormControl>
                            <TextField
                                id="filled-basic"
                                type="text"
                                variant="outlined"
                                color="secondary"
                                value={nomeItem}
                                fullWidth
                                disabled
                                sx={{ mb: 2 }}
                                style={{width: '40%', marginLeft: 15}}
                            />
                <Button variant="outlined" color="secondary" onClick={(event) => handleSubmit(event)}>
                    <AddIcon />
                </Button>                  
            </Stack>

            <Stack>
                <CustomizedTables 
                    listaItens={addData}
                />
            </Stack>

           
        </React.Fragment>            
    )
}