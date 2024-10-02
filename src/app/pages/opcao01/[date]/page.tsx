"use client"
import { NasaType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Opcao01({ params }: { params: {date: string}}) {
    const [nasa, setNasa] = useState<NasaType>({
        title: "string", 
        url: "string", 
        service_version: "string", 
        media_type: "string", 
        explanation: "string", 
        date: "string"
      })
  
      useEffect(() => {
        const consumoApi = async ()=>{
          const response = await fetch(`http://localhost:3000/api/nasa/${params.date}`);
          const dados = await response.json();
          setNasa(dados);
        }
        consumoApi();
      }, [nasa, params.date]);
    return (
        <div>
            <h1>{nasa.title}</h1>
            <Image src={nasa.url} alt="Nasa Image"></Image>
            <p>{nasa.date}</p>
            <p>{nasa.explanation}</p>

        </div>



    )
}