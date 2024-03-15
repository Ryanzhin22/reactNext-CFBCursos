import Topo from "@/components/Topo";
import { useState, useEffect } from "react";
import Globais from "@/components/Globais";

export default function UseEffect() {
  const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert("useEffect disparado");
  }, [aux]);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <Topo />
      <div>
        <p>{`Valor de cont: ${cont}`}</p>
        <p>{`Valor de aux: ${aux}`}</p>
        <button onClick={add}>Adicionar</button>
      </div>
      <div>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
        <p>{Globais.ano}</p>
      </div>
    </div>
  );
}
