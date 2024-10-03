import { NextResponse } from "next/server";
import { API_KEY, URL_NASA } from "@/data/global";

export async function GET(request: Request) {
  try {
    // Criar um objeto URL a partir da URL da requisição
    const { pathname } = new URL(request.url);

    // Extrair o último segmento do caminho da URL como 'id'
    const id = pathname.split("/").pop();

    // Verificar se o 'id' foi extraído corretamente
    if (!id) {
      return NextResponse.json({ error: "Parâmetro 'id' não encontrado" }, { status: 400 });
    }

    // Construir a URL da API usando o 'id'
    const apiUrl = `${URL_NASA}?api_key=${API_KEY}&date=${id}`;
    console.log(`Fetching data from: ${apiUrl}`);

    // Fazer a requisição à API
    const response = await fetch(apiUrl);

    // Verificar se a resposta é bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.statusText}`);
    }

    // Converter a resposta para JSON
    const dadosJson = await response.json();

    // Retornar os dados como JSON
    return NextResponse.json(dadosJson);
  } catch (error) {
    // Lidar com erros e retornar uma resposta de erro
    console.error('Erro ao buscar dados:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados da API' }, { status: 500 });
  }
}