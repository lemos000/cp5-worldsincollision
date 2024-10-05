import Image from "next/image";
import Logo from "../../public/img/logo.png"
import Link from "next/link";
export default function Cabecalho() {
    return (
        <div className="flex justify-between items-center p-5 bg-blue-900 sticky text-white border-b-white border-b-2">
            <span className="flex items-center">
                <Image src={Logo} alt="Logo Black Hole" height={60}></Image>
                <h1 className="ml-4 font-semibold text-3xl">Immanuel Velikovsky</h1>
            </span>
            <nav className="flex gap-3 text-lg">
                <Link className="hover:underline" href={'/'}>Home</Link>
                <Link className="hover:underline" href={'/pages/historia'}>História</Link>
                <Link className="hover:underline" href={'/pages/legado'}>Ideias</Link>
                <Link className="hover:underline" href={'/pages/vida'}>Worlds in Collision</Link>
                <Link className="hover:underline" href={'/pages/teorias'}>Cálculos</Link>
            </nav>
        </div>
    );
};