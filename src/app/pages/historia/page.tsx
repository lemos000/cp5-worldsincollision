import Image from "next/image";
import Idoso from "../../../public/img/immanuel.jpg";
import Livro from "../../../public/img/livro.jpg"
export default function Historia() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="flex flex-col justify-center items-center p-6">
        <h1 className="text-center font-bold text-4xl m-5 text-gray-800">
          A Vida de Immanuel Velikovsky
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center">
          <Image
            src={Idoso}
            alt="Immanuel"
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <section className="text-lg lg:text-xl flex flex-col justify-evenly max-w-screen-lg text-gray-700">
            <p className="mb-6">
              Immanuel Velikovsky foi um médico e psicanalista nascido em 10 de
              junho de 1895, em Vitebsk, no Império Russo, que corresponde
              atualmente à Bielorrússia. Ele iniciou sua formação acadêmica na
              Universidade de Moscou, onde estudou medicina. Após seus estudos,
              Velikovsky se mudou para a Palestina, onde desempenhou um papel
              fundamental na fundação da Universidade Hebraica de Jerusalém,
              contribuindo para o desenvolvimento acadêmico e científico da
              região.
            </p>
            <p>
              Na década de 1930, Velikovsky emigrou para os Estados Unidos, onde
              começou a desenvolver teorias que desafiavam as concepções
              científicas e históricas estabelecidas na época. Ele se tornou uma
              figura controversa devido às suas ideias inovadoras e muitas vezes
              polêmicas, que propunham a ocorrência de eventos cataclísmicos na
              história da Terra e do sistema solar. Velikovsky acreditava que
              esses eventos estavam registrados em mitos e lendas antigas de
              diversas culturas ao redor do mundo.
            </p>
          </section>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 my-11 justify-around items-center">
      
          <section className="mt-28 text-lg lg:text-xl flex flex-col justify-evenly max-w-screen-lg text-gray-700">
            <p className="mb-6 text-center">
                Worlds in Collision
            </p>
          <Image src={Livro} alt="Livro" height={500} ></Image>
          <p>Sua obra mais famosa</p>
          </section>
        </div>
      </main>
    </div>
  );
}