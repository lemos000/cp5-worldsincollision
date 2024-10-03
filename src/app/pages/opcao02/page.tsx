import Image from "next/image"
import Imagemzica01 from "../../../public/img/imagemImmanuel.webp"

export default function opcao02() {
    return(
    <div>
        <h1>A Vida e a Obra de Immanuel Velikovsky</h1>
        <p>Immanuel Velikovsky foi um autor e psicanalista russo-americano que ganhou notoriedade na década de 1950 por seus livros controversos que abordavam catastrofismo e história antiga. Nascido em 1895, Velikovsky teve uma formação diversificada em medicina e psicanálise, o que moldou sua abordagem interdisciplinar. Suas ideias desafiavam as visões científicas e históricas convencionais, propondo que eventos cataclísmicos de origem cósmica moldaram a história da Terra e da humanidade de maneiras significativas. Ele lançou luz sobre a interconexão entre mitologia e eventos históricos, instigando um debate sobre a forma como percebemos o passado.</p>
        <Image src={Imagemzica01} alt="Imagem do autor e psicanalista russo-americano Immanuel Velikvsky" width={50} height={50} priority={true} />
    </div>
)}

