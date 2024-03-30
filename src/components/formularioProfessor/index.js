import { Button, Container, Stack } from "@mui/material";
import React from "react";
import Campo from "../campo/inserirTexto";


export default function RegistrarNovo(props) {

    function handleSubmit () {
        props.submit()
    }

    return (
        <React.Fragment>
            <Container>
                <form style={{marginRight: '20%'}}>
                    <h1>{props.titulo}</h1>
                    <Stack spacing={0} display={"flex"} direction="row" sx={{ marginBottom: 2 }}>
                        <Campo 
                            label={props.label1}
                            dado={props.dado1}
                            setDado={props.setDado1}
                        />
                    </Stack>
                    <Stack spacing={0} display={"flex"} direction="row" sx={{ marginBottom: 2 }}>
                        <Campo 
                            label={props.label2}
                            dado={props.dado2}
                            setDado={props.setDado2}
                        />
                    </Stack>
                    <Stack spacing={0} display={"flex"} direction="row" sx={{ marginBottom: 2 }}>
                        <Campo 
                            label={props.label3}
                            dado={props.dado3}
                            setDado={props.setDado3}
                        />
                    </Stack>
                    <Button variant="outlined"
                        color="secondary"
                        onClick={(event) => handleSubmit(event)}>
                    Cadastrar
                </Button>
                    </form>    
            </Container>
        </React.Fragment>
    );
}