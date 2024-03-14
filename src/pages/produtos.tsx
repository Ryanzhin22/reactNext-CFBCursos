import Card from "@/components/Card";
import Topo from "@/components/Topo";
import {useRouter} from "next/router";

function calcDesc(v:number,d:number){
    return v-d
  }
  
  function calcDesc2(v:number,d:number){
    return v-(d*0.5)
  }
  
  const produtos = [
    {
      id:1,
      produto: "Mouse",
      valor: 49.90,
      desconto: 0,
      disponivel: true,
    },
    {
      id:2,
      produto: "Teclado",
      valor: 69.90,
      desconto: 0,
      disponivel: false,
    },
    {
      id:3,
      produto: "Monitor",
      valor: 459.90,
      desconto: 150,
      disponivel: true,
    },
    {
      id:4,
      produto: "CPU",
      valor: 799.90,
      desconto: 50,
      disponivel: true,
    },
    {
      id:5,
      produto: "Caixa de Som",
      valor: 39.90,
      desconto: 2,
      disponivel: true,
    }
  ]

export default function produtosPagina(){
    const router = useRouter()
    const nome = router.query.nome
    const curso = router.query.curso
    console.log(nome,curso)
    return(
        <div className="flex flex-col justify-center gap-3">
        <Topo/>
        { produtos.map((e)=>{
          if(e.disponivel){
            return(
              <Card key={e.id} produto={e.produto} desconto={e.desconto} valor={e.valor} funcao={calcDesc}>
                <div>Curso de React Next</div>
                <div>CFBCursos</div>
              </Card>
            )
          }
        }) 
        }
      </div>
    )
}