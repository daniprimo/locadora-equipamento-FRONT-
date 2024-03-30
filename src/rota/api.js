import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ListarAgendamentos from "../page/listarAgendamentos";
import NovoAgendamento from "../page/registrarNovoAgendamento";
import NovoItem from "../page/item/registrarItem";
import RegistrarNovoProfessor from "../page/novoProfessor";
import ListarAgendamentosRetirados from "../page/listarAgendamentos/retirados";


export default function Rotas() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<ListarAgendamentos />}/>
                    <Route path="/agendamento" element={<NovoAgendamento />}/>
                    <Route path="/novoItem" element={<NovoItem />}/>
                    <Route path="/novoProfessor" element={<RegistrarNovoProfessor />}/>
                    <Route path="/emprestados" element={<ListarAgendamentosRetirados />}/>
                </Routes>
            </Router>
        </>
    )
}