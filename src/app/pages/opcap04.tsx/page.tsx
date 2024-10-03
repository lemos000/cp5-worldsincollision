import Image from "next/image"
import Imagemzica03 from "../../../public/img/fotoAstro.jpg"

export default function opcao04() {
    return(
    <div>
        <h1>Impacto e Legado</h1>
        <p>As ideias de Velikovsky enfrentaram resistência significativa da comunidade científica, que as classificou como pseudociência devido à falta de evidências empíricas e à violação de princípios fundamentais da física. Contudo, sua obra conquistou um público popular expressivo, intrigado por suas teorias ousadas e pela narrativa de catástrofes. Velikovsky deixou um legado cultural duradouro, inspirando debates sobre a intersecção entre ciência e mitologia. Mesmo após sua morte, seus conceitos continuam a ser explorados por entusiastas e pesquisadores, refletindo uma resistência à aceitação completa no mainstream científico. Ele permanece uma figura polarizadora, desafiando a rigidez das teorias estabelecidas e ressaltando a importância de questionar e testar continuamente o conhecimento científico. A ousadia de suas hipóteses continua a ser um ponto de referência para aqueles que buscam explorar os limites do pensamento científico e histórico.</p>
        <Image src={Imagemzica03} alt="imagem de um astronauta imerso no espaço" width={50} height={50} priority={true} />
    </div>
)}