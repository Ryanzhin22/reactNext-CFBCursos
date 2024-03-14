import Link from "next/link";

export default function Topo() {
  return (
    <div className="flex justify-between items-center bg-zinc-300 h-[100px]">
      <Link href={"/"}>Logo</Link>
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl">CFB Cursos</div>
        <div className="subTitle tracking-normal">Curso de React</div>
      </div>
      <nav className="flex gap-5">
        <Link href={"/"}>Home</Link>
        <Link
          href={{
            pathname: "/produtos",
            query: {
              nome: "Ryan",
              curso: "React Next",
            },
          }}
        >
          Produtos
        </Link>
        <Link href={"/testePagina"}>Teste</Link>
        <Link href={"/useState"}>UseState</Link>
      </nav>
    </div>
  );
}
