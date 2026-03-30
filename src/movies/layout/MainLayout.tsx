
import type { FC } from "react";
import { Header } from "../components";
import { Box } from "@mui/material";

interface Props {
    children: React.ReactNode
}


export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
        <Header />
        
        <Box sx={{
            padding:'69px 1rem 1rem 1rem',
            backgroundColor: '#2e2c33',
        }}>
            {children}
        </Box>
        {/* <Footer/> */}
        </>
    )
}