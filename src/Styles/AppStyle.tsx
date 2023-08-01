
import { Box, styled } from "@mui/material";

export const AppContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(180deg, rgba(35,25,209,1) 0%, rgba(26,172,223,1) 100%, rgba(28,28,212,1) 100%)',
    boxShadow: 'rgba(82, 0, 255, 0.5) 5px -5px 20px 0, rgba(82, 0, 255, 0.5) 5px 5px 20px 0, rgba(82, 0, 255, 0.5) -5px -5px 20px 0, rgba(82, 0, 255, 0.5) -5px 5px 20px 0',
    width: '100%',
    height: '99vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    boxSizing: 'border-box',
}));