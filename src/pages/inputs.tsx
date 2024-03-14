import { useState } from "react"
import Topo from "@/components/Topo"

export default function inputs(){
    const [nome,setNome] = useState<string>("")
    const [curso,setCurso] = useState<string>("")

    return(
        <div>
            <Topo/>
            <div className="campoForm">
                <label htmlFor="nome">Nome:</label>
                <input type="text" value={nome} onChange={(evt)=>setNome(evt.target.value)}/>
            </div>
            <div className="campoForm">
                <label htmlFor="curso">Curso:</label>
                <input type="text" value={curso} onChange={(evt)=>setCurso(evt.target.value)}/>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curso escolhido: {curso}</div>
        </div>
    )
}