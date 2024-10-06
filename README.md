# 🌍 Worlds in Collision - Explorando as Ideias de Immanuel Velikovsky

Este projeto é uma aplicação web baseada em **Immanuel Velikovsky**, desenvolvida utilizando **Next.js** com **TypeScript** e estilizada com **Tailwind CSS**. A aplicação visa explorar e ilustrar as principais ideias do pseudocientista, proporcionando uma experiência interativa e visual para os usuários.

## 📚 Sobre o Projeto

A aplicação consiste em quatro páginas principais, cada uma destacando aspectos diferentes sobre Velikovsky:

1. **Páginas Teóricas**: Três páginas dedicadas a ilustrar e explicar as ideias mais significativas de Velikovsky, como as catástrofes planetárias e suas possíveis influências na história da Terra.
2. **Página sobre a vida de Velikovsky**: Uma página que conta a sua vida fora de ideias e estudos.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização estática e dinâmica.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework de CSS para estilização rápida e eficiente.

## ⚙️ Funcionalidades Principais

### Estrutura de Rotas
- **Rotas Dinâmicas**: Implementação de rotas dinâmicas utilizando o formato `[slug]` que recebe parâmetros da URL e renderiza conteúdos personalizados.
  
### Página de Erro Personalizada
- Uma página de erro (`not-found.tsx`) foi criada utilizando o componente `Image` do Next.js para exibir uma ilustração personalizada, em caso de erro de rota.

### Consumo da API da NASA
- Integração com a **NASA APOD API** para exibir dinamicamente imagens astronômicas fornecidas pela NASA. As imagens são carregadas de forma dinâmica nas páginas, fornecendo uma experiência visual rica.

### Endpoints Personalizados
- Um endpoint customizado foi implementado em `route.tsx`, que consome a API da NASA e exibe uma lista de imagens.

## 🛠 Como Executar o Projeto

### Pré-requisitos
Antes de iniciar, você precisará ter o [Node.js](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados em sua máquina.

### Instalação

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/lemos000/cp5-worldsincollision.git
    ```

2. **Entre no diretório do projeto:**
    ```bash
    cd cp5-worldsincollision
    ```

3. **Instale as dependências:**
    ```bash
    npm install
    ```

4. **Execute o projeto em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

5. **Abra o navegador e acesse:**
    ```bash
    http://localhost:3000
    ```

## 🔧 Estrutura do Projeto

A estrutura do projeto segue a organização do framework **Next.js** com arquivos especiais:

- **pages/**: Contém as páginas do projeto, como `index.tsx`, `not-found.tsx` e páginas dinâmicas.
- **components/**: Componentes reutilizáveis da aplicação.
- **styles/**: Arquivos de estilo com **Tailwind CSS**.
- **api/**: Implementação dos endpoints da aplicação, como o consumo da API da NASA.

## 🌌 Consumo da API da NASA

Para utilizar a **NASA APOD API**, é necessário configurar a URL base fornecida pela documentação. O projeto busca imagens diretamente dessa API, fornecendo aos usuários imagens de alta qualidade sobre o universo.

- **Documentação da API**: [NASA APOD API](https://api.nasa.gov/).

## 👥 Colaboradores

- [Samuel Yariwake](https://github.com/samuelpy1)
- [Gabriel Lemos da Silva](https://github.com/lemos000)
- [João Pedro Amorim Brito Virgens](https://github.com/JPAmorimBV)

---

> Explorando as fronteiras entre ciência, mitologia e astronomia com Next.js e APIs modernas.
