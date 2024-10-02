import { NextResponse } from "next/server";
import { API_KEY, URL } from "@/data/global";

export async function GET() {

    const dados = await fetch(URL + "apod" + API_KEY)
    return NextResponse.json(dados);
}