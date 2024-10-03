"use client"
import { API_KEY } from "@/data/global";
import { NasaType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Opcao01({ params }: { params: { date: string } }) {
  const [nasa, setNasa] = useState<NasaType | null>(null);

  useEffect(() => {
    const consumoApi = async () => {
      try {
        const response = await fetch(`${URL}?api_key=${API_KEY}&date=${params.date}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const dados = await response.json();
        setNasa(dados);
      } catch (error) {
        console.error(error);
      }
    };
    consumoApi();
  }, [params.date]);

  if (!nasa) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{nasa.title}</h1>
      {nasa.media_type === "image" && (
        <Image src={nasa.url} alt="Nasa Image" width={500} height={500} />
      )}
      <p>{nasa.date}</p>
      <p>{nasa.explanation}</p>
    </div>
  );
}