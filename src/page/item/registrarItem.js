import { Button, Container, Stack } from '@mui/material';
import * as React from 'react';
import Campo from '../../components/campo/inserirTexto';
import ListaDosItens from '../../components/listaDeTabelas/listaDeItens';
import CampoSelect from '../../components/campo/inserirSelect';
import { buscarCategoriaDisponivel, buscarTodosItensDisponivel, criarNovoItem } from '../../service/item';
import { toast } from 'react-toastify';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function NovoItem() {
    const [nomeItem, setNomeItem] = React.useState();
    const [nomeCategoria, setNomeCategoria] = React.useState();
    const [idCategoria, setIdCategoria] = React.useState();

    const [categoria, setCategoria] = React.useState([]);
    const [listaDosItens, setListaDosItens] = React.useState([]);
    const [reload, setReload] = React.useState(false);
    
    const modal = {
        nomeDoItem: nomeItem,
        id_categoria: idCategoria
    }

    function handleSubmit() {
      
          criarNovoItem(modal).then((data) => {
            toast.success("Item"+ data.data.id +"criado.")
            setNomeItem("")
            setNomeCategoria("")
            handlerFunction()
          }).catch((err) => {
            console.log(err)
          });
         
    }

    React.useEffect(() => {
        buscarCategoriaDisponivel()
            .then((data) => {
                setCategoria(data.data)
            })
            handlerFunction()
    }, [idCategoria, reload])

    function handlerFunction() {
        buscarTodosItensDisponivel()
            .then((data) => {
                setListaDosItens(data.data)
            })
    }

  return (<React.Fragment>
    <Container>
        <br/>
        <Stack direction="row" spacing={2} sx={{marginBottom: 2}}>
            <form>
                <Campo 
                    label={"Nome do Item"}
                    dado={nomeItem}
                    setDado={setNomeItem}
                />
                
                <CampoSelect
                   labelSelect={"Categoria"}
                   dado={nomeCategoria}
                   setDado={setNomeCategoria}
                   setidCategoria={setIdCategoria}
                   opcoes={categoria}
                   reload={reload}
                   setReload={setReload}     
                />
                <Button variant="outlined"
                        color="secondary"
                        onClick={(event) => handleSubmit(event)}>
                    Cadastrar
                </Button>
 
            </form>
        </Stack>    
        <Stack>    
            <ListaDosItens
                listaItens={listaDosItens}
            />
        </Stack>
    </Container>
  </React.Fragment>
  );
}