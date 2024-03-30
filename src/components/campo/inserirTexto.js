import { Box, TextField } from "@mui/material";

export default function Campo(props) {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 0, width: '100%', marginBottom: 2 },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                            <TextField 
                                label={props.label}
                                id="outlined-size-normal"
                                value={props.dado}
                                onChange={(e) => props.setDado(e.target.value)}
                            />
                </div>
            </Box>
        </>
    )
}