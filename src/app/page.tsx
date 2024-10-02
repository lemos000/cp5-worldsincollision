import Image from "next/image";
import Nasa from "../public/nasa-logo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-blue-900 text-white">
      <Image src={Nasa} alt="Nasa logo" className="mb-4 h-40 w-auto" />
      <h1 className="text-4xl font-bold text-center mb-2">Worlds in Collision</h1>
      <h2 className="text-2xl text-center mb-8">Immanuel Velikovsky</h2>
      <div className="flex gap-4">
        <Link href="/page1">
          <div className="bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer">
            🚀 Opção 1
          </div>
        </Link>
        <Link href="/page2">
          <div className="bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer">
            🚀 Opção 2
          </div>
        </Link>
        <Link href="/page3">
          <div className="bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer">
            🚀 Opção 3
          </div>
        </Link>
        <Link href="/page4">
          <div className="bg-gray-800 p-4 rounded-lg text-center flex items-center justify-center cursor-pointer">
            🚀 Opção 4
          </div>
        </Link>
      </div>
    </div>
  );
}