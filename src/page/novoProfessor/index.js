import { Stack } from "@mui/material";
import RegistrarNovo from "../../components/formularioProfessor";
import { useState } from "react";
import { toast } from "react-toastify";
import { registrarProfessor } from "../../service";
import { registrarAtendente } from "../../service/atendente";

export default function RegistrarNovoProfessor() {
    const [dado1, setDado1] = useState()
    const [dado2, setDado2] = useState()
    const [dado3, setDado3] = useState()

    const professor = {
        nome: dado1,
        cpf: dado2,
        telefone: dado3
      }
    
      
    function handlerRegistrarProfessor() {
        registrarProfessor(professor).then((data) => {
            setDado1("")
            setDado2("")
            setDado3("")
            toast.success("Professor "+
            data.data.cpf +" foi registrado com sucesso.")
        }).catch((err) => {
            toast.error("Não foi possivel registrar o professor.")
        })
    }
    
    const [nome, setNome] = useState()
    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()

    const atendante = {
        nome: nome,
        login: login,
        senha: senha
      }
    
    function handlerRegistrarAtendente(){
        registrarAtendente(atendante)
            .then((data) => {
                setNome("")
                setLogin("")
                setSenha("")
                toast.success("Atendente "+ 
                data.data.codigo +" criado com sucesso.")
            }).catch((Err) => {
                toast.error("Falha ao registrar atendente.")
            })
    }

    return (<>
        <Stack direction={"row"}>
            <Stack >
                <RegistrarNovo 
                    titulo={"Registrar Professor"}
                    label1={"Nome"}
                    dado1={dado1}
                    setDado1={setDado1}
                    label2={"Cpf"}
                    dado2={dado2}
                    setDado2={setDado2}
                    label3={"Telefone"}
                    dado3={dado3}
                    setDado3={setDado3}
                    submit={handlerRegistrarProfessor}
                />
            </Stack>
            <Stack>
                <RegistrarNovo 
                    titulo={"Registrar Atendente"}
                    label1={"Nome"}
                    dado1={nome}
                    setDado1={setNome}
                    label2={"Login"}
                    dado2={login}
                    setDado2={setLogin}
                    label3={"Senha"}
                    dado3={senha}
                    setDado3={setSenha}
                    submit={handlerRegistrarAtendente}
                />
            </Stack>
        </Stack>
    </>);
}