"use client"
import { NasaType } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About({ params }: { params: { date: string } }) {
  const [apod, setApod] = useState<NasaType>({
    copyright: " ",
    title: "",
    url: "",
    service_version: "",
    media_type: "",
    explanation: "",
    date: "",
    hdurl: ""
  });


  const selectedDate = params.date;

  useEffect(() => {
    const fetchApod = async (date: string) => {
      try {
        const response = await fetch(`http://localhost:3000/api/nasa/${date}`);
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error('Erro na busca:', error);
      }
    };

    fetchApod(selectedDate);
  }, [selectedDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Foto Astronômica do Dia {params.date}
        </h1>
        <h2 className="text-xl font-bold text-center mb-2">{apod.title}</h2>
        {apod.copyright && (
          <p className="text-sm text-gray-600 mb-4">© {apod.copyright}</p>
        )}
        {apod.media_type === "image" ? (
          <Image
            src={apod.url}
            alt={apod.title}
            className="max-w-full h-auto rounded-lg shadow-lg mb-6 flex justify-center"
            width={500}
            height={500}
          />
        ) : apod.media_type === "video" ? (
          <iframe
            src={apod.url}
            title={apod.title}
            className="w-full max-w-lg h-64 mb-6"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-black mb-6">Carregando...</p>
        )}
        <p className="text-lg text-center mb-6">{apod.explanation}</p>
        <Link href={'/'}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}