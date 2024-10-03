import { NextResponse } from "next/server";
import { API_KEY, URL_NASA } from "@/data/global";

export async function GET() {

    const response = await fetch(`${URL_NASA}?api_key=${API_KEY}`)
    const dadosJson = await response.json()
    return NextResponse.json(dadosJson);
}