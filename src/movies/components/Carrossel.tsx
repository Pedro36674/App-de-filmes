import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Navigation}  from 'swiper/modules'; 

import 'swiper/css';
import 'swiper/css/navigation';

export const Carrossel = () => {
     const [filmes, setFilmes] = useState<any[]>([])
    
    const obterFilmes = async () => {
        const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=4707ede47145c2c54054232506a1cfc2'
        const resposta = await fetch(url)
        const dados = await resposta.json()
        setFilmes(dados.results)
    }
    
    useEffect(() => {
        obterFilmes()
    }, [])

    return (

        <Box sx={{ marginBottom: '2rem' }}>
            <Typography fontWeight={600} color="#fff" fontSize={20}>Os mais assistidos</Typography>
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
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