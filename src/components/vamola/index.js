import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DatePickers from "../input/data";
import { buscarProfessorPeloCpf } from "../../service";
import { buscarAtendentePorId } from "../../service/atendente";
import ItensAgendamentos from "../listaAgendamento";
import { criandoUmNovoAgendamento } from "../../service/agendamento";
import { useNavigate } from "react-router-dom";




export default function RegistrarNovoProjeto(children) {

  const navigate = useNavigate()

    const [data, setData] = useState()
    const [hora, setHora] = useState()
    const [cpfProfessor, setCpfProfessor] = useState("");
    const [professor, setProfessor] = useState("");
    const [itens, setItens] = useState([]);

    const [atendente, setAtendente] = useState("")
    const [idAtendente, setIdAtendente] = useState("")

    const [useCase, setUseCase] = useState(false);

    useEffect(() => {
        handleBuscaNomeProfessor(cpfProfessor)
        handleBuscarAtendentePorId(idAtendente)
        console.log(itens)
      },[cpfProfessor, idAtendente])

      const AgendamentorRequest = {
        cpfProfessor: cpfProfessor,
        idAtendenete: idAtendente,
        listaDeItens: itens,
        dataAgendado: data,
        horaAgendado: hora
      }
      
    function handleBuscaNomeProfessor(cpf) {
      buscarProfessorPeloCpf(cpf)
          .then((data) => {
            setProfessor(data.data.nome)
          })
          .catch((err) => {
            //console.log(err)
            setIdAtendente("")
          })
    }

    function handleBuscarAtendentePorId(id) {
      buscarAtendentePorId(id).then((data) => {
        setAtendente(data.data.nome);
      }).catch((err) => {
        setAtendente("")
        //console.log(err)
      })
    }

    function handleSubmit() {
      
        
      if (cpfProfessor === "") {
        toast.error("Deve inserir um professor")
        return
      }

        if (idAtendente === "") {
          toast.error("Deve inserir um atendente")
          return
        }
        
        if (itens === "") {
          toast.error("Deve inserir um item")
          return
        }

        if (data === undefined  || hora === undefined) {
          toast.error("Deve preencher a data w hora")
          return
        }

        console.log(AgendamentorRequest)
        
        criandoUmNovoAgendamento(AgendamentorRequest).then((data) => {
          console.log(data.data)
          toast.success("Agendamento Realizado com sucesso")
          setIdAtendente("")
          setAtendente("")
          setCpfProfessor("")
          setProfessor("")
          setItens([])
          setData("")
          setHora("")
          navigate("/")
        }).catch((err) => {
          console.log(err.mensage)
          toast.error("Não foi possivel criar o agendametno")
        })       
       
      }

    return(
      <React.Fragment>
            <h2>Agendamento de equipamento</h2>
            <form> 
          <Stack spacing={0} display={"flex"} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                 id="filled-basic"
                 label="CPF"
                 variant="filled"
                 value={cpfProfessor}
                 sx={{mb: 2}}
                 onChange={(e) => setCpfProfessor(e.target.value)}
                 />
                  <TextField
                    id="filled-basic"
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Nome do professor"
                    value={professor}
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled
                    style={{marginRight: '20%', marginLeft: 15}}
                  />     
                            
          </Stack>
          <Stack spacing={0} display={"flex"} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                 id="filled-basic"
                 label="Codigo"
                 variant="filled"
                 value={idAtendente}
                 sx={{mb: 2}}
                 onChange={(e) => setIdAtendente(e.target.value)}
                 />

                  <TextField
                    id="filled-basic"
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Nome atendente."
                    value={atendente}
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled
                    style={{marginRight: '20%', marginLeft: 15}}
                  />     
                            
          </Stack>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <DatePickers 
              titulo={"Agendamento de retirada"}
              data={data}
              hora={hora}
              setData={setData}
              setHora={setHora}
            />
        
          </Stack>
          <Stack spacing={0} display={"flex"} direction="column" sx={{ marginBottom: 2 }}>
              <ItensAgendamentos 
                setListaItensRequest={setItens}
              />
          </Stack>
          <Button variant="outlined" color="secondary" onClick={(event) => handleSubmit(event)}>
                Salvar Agendamento
          </Button>
      </form>
      </React.Fragment>            
    )
}