import Image from "next/image";
import Link from "next/link";
import nf from "../public/img/notfoundpage.png";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4x1 font-bold text-gray-800 mb-6">404: Page Not Found</h1>
            <Image src={nf} alt="page not found nasa" className="mb-4 h-40 w-auto" />
            <p className="text-lg text-gray-600 mb-4">O conteúdo que você está tentando acessar não está disponível!</p>
            <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Voltar a página inicial
            </Link>
        </div>
    )
}