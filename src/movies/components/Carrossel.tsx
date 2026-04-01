import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import type { FC } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Navigation}  from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';
import type { MoviesResponse, MovieShort } from "../interfaces";

interface CarrosselProps {
    titulo: string;
    slug: string;
}

export const Carrossel: FC<CarrosselProps> = ({ titulo, slug }) => {
     const [filmes, setFilmes] = useState<MovieShort[]>([])
    
    const obterFilmes = async () => {
        const url = `${import.meta.env.VITE_API_URL}${slug}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR`
        const resposta = await fetch(url)
        const dados: MoviesResponse = await resposta.json()
        setFilmes(dados.results)
    }
    
    useEffect(() => {
        obterFilmes()
    }, [])

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