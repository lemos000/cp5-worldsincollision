import { NextResponse } from "next/server";
import { API_KEY, URL } from "@/data/global";

export async function GET() {

    const response = await fetch(`${URL}?api_key=${API_KEY}`)
    const dadosJson = await response.json()
    return NextResponse.json(dadosJson);
}