interface DisplayStateProps {
  valor: number;
  valorFuncao: any;
}

export default function DisplayState(props: DisplayStateProps) {
    
  function operacao(op:number) {
    let c = props.valor;
    c+=op;
    props.valorFuncao(c);
  }

  return (
    <div className="flex flex-col p-5 rounded-md bg-zinc-400 items-center justify-center w-[300px]">
      <div className="flex bg-zinc-700 text-green-500 justify-center items-center w-[170px] mb-3">
        {props.valor}
      </div>
      <div className="flex gap-5">
        <button className="btnPadrao" onClick={()=>{operacao(1)}}>
          Add
        </button>
        <button className="btnPadrao" onClick={()=>{operacao(-1)}}>
          Sub
        </button>
      </div>
    </div>
  );
}
