import { Carrossel } from "../components"
import { MainLayout } from "../layout"

export const Home = () => {



    return (

       <MainLayout>
           <Carrossel titulo="Os mais assistidos" slug="trending/all/week" />
           <Carrossel titulo="Filmes em destaque" slug="movie/popular" />
           <Carrossel titulo="Séries em alta" slug="tv/popular" />
           <Carrossel titulo="Filmes em breve" slug="movie/upcoming" />
           <Carrossel titulo="Filmes em cartaz" slug="movie/now_playing" />
        </MainLayout>

    )
}