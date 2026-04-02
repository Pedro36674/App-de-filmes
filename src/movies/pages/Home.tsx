import { CarrosselSuspense } from "../components"
import { MainLayout } from "../layout"

export const Home = () => {



    return (

       <MainLayout>
           <CarrosselSuspense titulo="Os mais assistidos" slug="trending/all/week" />
           <CarrosselSuspense titulo="Filmes em destaque" slug="movie/popular" />
           <CarrosselSuspense titulo="Séries em alta" slug="tv/popular" />
           <CarrosselSuspense titulo="Filmes em breve" slug="movie/upcoming" />
           <CarrosselSuspense titulo="Filmes em cartaz" slug="movie/now_playing" />
           <CarrosselSuspense titulo="Séries no ar" slug="tv/on_the_air" />
           <CarrosselSuspense titulo="Séries com melhor avaliação" slug="tv/top_rated" />
       </MainLayout>

    )
}