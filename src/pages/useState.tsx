import { useState } from "react";
import DisplayState from "@/components/DisplayState";
import Topo from "@/components/Topo";

export default function UseState() {
  let [cont, setCont] = useState<number>(0);

  return (
    <div>
    <Topo />
      <DisplayState
        valor={cont}
        valorFuncao={setCont}
      ></DisplayState>
    </div>
  );
}
