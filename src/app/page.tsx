import Image from "next/image";
// import Link from "next/link";
import Nasa from "../public/img/nasa-logo.png";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Apod from "@/components/Apod/Apod";

export default function Home() {
  return (
    <main>
      <Cabecalho></Cabecalho>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-blue-900 text-white p-6">
        <Image src={Nasa} alt="Nasa logo" className="mb-4 h-40 w-auto" />
        <h1 className="text-4xl font-bold text-center mb-2">
          Worlds in Collision
        </h1>
        <h2 className="text-2xl text-center mb-8">Immanuel Velikovsky</h2>
        <div className="flex gap-4">
          <Apod></Apod>
        </div>
      </div>
    </main>
  );
}
