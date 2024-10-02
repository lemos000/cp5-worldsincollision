import { NextResponse } from "next/server";
import { API_KEY, URL } from "@/data/global";

export async function GET({params}: {params: {date: string}}) {

    const dados = await fetch(URL + API_KEY + params.date)
    return NextResponse.json(dados);

}