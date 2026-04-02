import { Box, Skeleton, Typography } from "@mui/material"
import { useEffect, useState, Suspense } from "react"
import type { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Navigation}  from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';
import type { MoviesResponse, MovieShort } from "../interfaces";
import { suspend } from "suspend-react";

interface CarrosselProps {
    titulo: string;
    slug: string;
}

const Loader: FC<CarrosselProps> = ({ titulo, slug }) => {
    return (
        <Box sx={{ marginBottom: '2rem' }}>
            <Typography fontWeight={600} color="#fff" fontSize={20}>{titulo}</Typography>
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
        >
            {
                Array.from({ length: 10 }).map((_, i) => (
                    <SwiperSlide key={`${slug}-loader-${i}`}>
                        <Box sx={{
                            width: '100%',
                            aspectRatio: '16/9',
                        }}>
                            <Skeleton variant="rounded" sx={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#e0e0e0'
                            }}  />

                        </Box>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </Box>
    )
}

const Carrossel: FC<CarrosselProps> = ({ titulo, slug }) => {
     //const [filmes, setFilmes] = useState<MovieShort[]>([])

     const sleep = (time_millis: number) => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('processo finalizado')
                resolve(1)
            }, time_millis)
        })
    }

    const filmes = suspend(async () => {
        await sleep(3000)
        const url = `${import.meta.env.VITE_API_URL}${slug}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`
        const resposta = await fetch(url)
        const dados: MoviesResponse = await resposta.json()
        return dados.results
        //setFilmes(dados.results)
    }, [slug])
    

    return (

        <Box sx={{ marginBottom: '2rem' }}>
            <Typography fontWeight={600} color="#fff" fontSize={20}>{titulo}</Typography>
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            onSlideChange={() => {}}
            onSwiper={(swiper) => {}}
        >
            {
                filmes.map(filme => (
                <SwiperSlide key={filme.id}>
                    <img style={{
                        width: '100%',
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        borderRadius: 10
                    }}
                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                        alt={filme.title}
                    />
                    
                </SwiperSlide>
                ) )
            }
        </Swiper>
        </Box>
        
    )
}

export const CarrosselSuspense: FC<CarrosselProps> = ({ slug, titulo }) => {
    return (
        <Suspense fallback={<Loader titulo={titulo} slug={slug} />}>
            <Carrossel titulo={titulo} slug={slug} />
        </Suspense>
    )
}