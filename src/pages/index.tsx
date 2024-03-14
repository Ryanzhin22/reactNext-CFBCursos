// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import Topo from "@/components/Topo";

export default function Home() {
  return (
    <main>
      <Topo/>
      <div>
        <div>Typescript</div>
        <div style={{color: "#f00", backgroundColor: "#bbb"}}>React</div>
      </div>
    </main>
  );
}