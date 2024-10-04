"use client"
import { NasaType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Apod(){
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
    const maxDate = new Date().toISOString().split('T')[0];


    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    });

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
        <div className="flex flex-col justify-center items-center">
            <h2>Escolha um dia para ver a foto!</h2>
            <input
                className="text-black"
                type="date"
                max={maxDate}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div className="flex w-3/4 m-8 border-black border">
                {apod.media_type === "image" && (
                    <Image src={apod.url} alt="Nasa Image" width={500} height={500} />
                )}
                <section className=" bg-slate-900 flex flex-col justify-around">
                    <span className="ml-4">
                        <h1 className="font-bold text-4xl">{apod.title}</h1>
                        <p>{apod.copyright}</p>
                    </span>
                    <p className="ml-4">{apod.explanation}</p>
                </section>
            </div>
        </div>
    );
}