import { NextResponse } from "next/server";
import { API_KEY, URL_NASA } from "@/data/global";

export async function GET(request: Request) {
  try {
    const { pathname } = new URL(request.url);

    const id = pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "Parâmetro 'id' não encontrado" }, { status: 400 });
    }

    const apiUrl = `${URL_NASA}?api_key=${API_KEY}&date=${id}`;
    console.log(`Fetching data from: ${apiUrl}`);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }

    const dadosJson = await response.json();

    return NextResponse.json(dadosJson);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados da API' }, { status: 500 });
  }
}