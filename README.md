# Movies App

Este é um aplicativo web de filmes e séries desenvolvido com React, TypeScript e Vite. O app permite aos usuários explorar uma variedade de conteúdos cinematográficos, incluindo filmes populares, séries em alta, lançamentos recentes e muito mais, utilizando a API do The Movie Database (TMDB).

## Funcionalidades

- **Carrosséis Interativos**: Navegue por diferentes categorias de filmes e séries usando carrosséis responsivos com navegação.
- **Conteúdo Diversificado**:
  - Os mais assistidos da semana
  - Filmes em destaque
  - Séries em alta
  - Filmes em breve
  - Filmes em cartaz
  - Séries no ar
  - Séries com melhor avaliação
- **Interface Moderna**: Design limpo e responsivo utilizando Material-UI (MUI).
- **Loading Suspense**: Experiência de carregamento suave com skeletons durante o fetch de dados.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **Material-UI (MUI)**: Biblioteca de componentes React para UI consistente.
- **Swiper**: Biblioteca para criação de carrosséis touch-friendly.
- **TMDB API**: Fonte de dados para informações de filmes e séries.
- **Suspense**: Para gerenciamento de estados de carregamento assíncronos.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd movies-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione suas chaves da API do TMDB:
     ```
     VITE_API_URL=https://api.themoviedb.org/3/
     VITE_API_KEY=sua-chave-api-aqui
     ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse `http://localhost:5173`.

## Estrutura do Projeto

- `src/App.tsx`: Componente principal da aplicação.
- `src/router/AppRouter.tsx`: Configuração de roteamento.
- `src/movies/components/`: Componentes relacionados a filmes (Carrossel, Header).
- `src/movies/pages/`: Páginas da aplicação (Home).
- `src/movies/layout/`: Layouts principais (MainLayout).
- `src/movies/interfaces/`: Definições de tipos TypeScript para dados de filmes.
- `src/movies/hooks/`: Hooks personalizados (se aplicável).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Constrói o projeto para produção.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o ESLint para verificação de código.

## Configuração do ESLint

O projeto utiliza ESLint para manter a qualidade do código. Para configurações avançadas, consulte a documentação oficial do ESLint e as recomendações para projetos React/TypeScript.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é licenciado sob a MIT License.
