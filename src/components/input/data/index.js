import { Button, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';


export default function DatePickers(props) {
    

  return (
    <>
    <Stack spacing={2} direction="column" sx={{ marginBottom: 4 }}>
        <h5>{props.titulo}</h5>
        <br/>
        <form style={{display: 'flex', flexWrap: 'wrap'}}>
        <TextField
                    id="date"
                    label="Data"
                    type="date"
                    value={props.data}
            style={{marginLeft: 1}}
            InputLabelProps={{
            shrink: true,
            }}
            onChange={(e) => props.setData(e.target.value)}
        />

    <TextField
        id="time"
        label="Hora"
        type="time"
        style={{marginLeft: 6, marginRight: 6}}
        value={props.hora}
        InputLabelProps={{
        shrink: true,
        }}
        inputProps={{
        step: 300, // 5 min
        }}
        onChange={(e) => props.setHora(e.target.value)}
    />
        
        </form>
    </Stack>
    </>
  );
}