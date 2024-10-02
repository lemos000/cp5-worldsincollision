import Image from "next/image";
import Link from "next/link";
import Nasa from "../public/img/nasa-logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-blue-900 text-white">
      <Image src={Nasa} alt="Nasa logo" className="mb-4 h-40 w-auto" />
      <h1 className="text-4xl font-bold text-center mb-2">Worlds in Collision</h1>
      <h2 className="text-2xl text-center mb-8">Immanuel Velikovsky</h2>
      <div className="flex gap-4">
        <Link href="/pages/opcao1/page.tsx">
          <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer hover:border-red-600 hover:bg-blue-900 transition duration-300">
            🚀 Opção 1
          </div>
        </Link>
        <Link href="/pages/opcao2/page.tsx">
          <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer hover:border-red-600 hover:bg-blue-900 transition duration-300">
            🚀 Opção 2
          </div>
        </Link>
        <Link href="/pages/opcao3/page.tsx">
          <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer hover:border-red-600 hover:bg-blue-900 transition duration-300">
            🚀 Opção 3
          </div>
        </Link>
        <Link href="/pages/opcao4/page.tsx">
          <div className="border-2 border-transparent bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer hover:border-red-600 hover:bg-blue-900 transition duration-300">
            🚀 Opção 4
          </div>
        </Link>
      </div>
    </div>
  );
}