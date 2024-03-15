import { useEffect, useState } from "react";
import Topo from "@/components/Topo";
import Globais from "@/components/Globais";

const cursos = ["HTML", "React", "C++", "Javascript", "Arduino", "CSS"];
const objCursos = [
  { curso: "HTML" },
  { curso: "React" },
  { curso: "C++" },
  { curso: "Javascript" },
  { curso: "Arduino" },
  { curso: "CSS" },
];

export default function Inputs() {
  const [nome, setNome] = useState<string>("");
  const [curso, setCurso] = useState<string>(cursos[0]);
  const [segCurso, setSegCurso] = useState<string>("");

  useEffect(()=>{
    Globais.curso = "TypeReactNext"
    Globais.canal = "Ryanzhin2"
    Globais.ano = "2025"
  },[])

  function fCursos() {
    return cursos.map((curso: any) => {
      return <option value={curso} key={Math.random()*99999999}>{`Curso de ${curso}`}</option>;
    });
  }

  const cursosOBJ = objCursos.map((c: any) => {
    return <option value={c.curso} key={Math.random()*99999999}>{c.curso}</option>;
  });

  return (
    <div>
      <Topo />
      <div className="campoForm">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(evt) => setNome(evt.target.value)}
        />
      </div>
      <div className="campoForm">
        <label htmlFor="curso">Curso:</label>
        <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
          {fCursos()}
        </select>
        <select
          value={segCurso}
          onChange={(evt) => setSegCurso(evt.target.value)}
        >
          {cursosOBJ}
        </select>
      </div>
      <div>Nome digitado: {nome}</div>
      <div>Curso escolhido: {curso}</div>
      <div>Segundo curso escolhido: {segCurso}</div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div> 
    </div>
  );
}
