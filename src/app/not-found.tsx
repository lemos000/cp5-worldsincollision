import Image from "next/image";
import Link from "next/link";
import nf from "../public/img/nasa-logo.png";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black to-blue-900 text-white">
            <h1 className="text-4x1 font-bold text-red-800 mb-6">404: Page Not Found</h1>
            <Image src={nf} alt="page not found nasa" className="mb-4 h-40 w-auto" />
            <p className="text-lg mb-4">O conteúdo que você está tentando acessar não está disponível!</p>
            <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Voltar a página inicial
            </Link>
        </div>
    )
}