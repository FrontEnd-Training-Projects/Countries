import { Box, styled } from "@mui/material";

export const MyChartContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(180deg, rgba(35,25,209,1) 0%, rgba(26,172,223,1) 100%, rgba(28,28,212,1) 100%)',
    width: '100%',
    height: '98.5vh',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
}));

export const MyChartWrapper = styled(Box)(({ theme }) => ({
    
    width: '80%',
    
}));