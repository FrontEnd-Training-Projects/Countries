import { Box, styled } from "@mui/material";
import Typography from '@mui/material/Typography';

export const TooltipBox = styled(Box)(({ theme }) => ({
    minWidth: '180px',
    height: '47px',
    backgroundColor: '#ece1e1',
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
}));

export const TooltipHeader = styled(Typography)(({ theme }) => ({
    color: '#e34519'
}));

export const TooltipDescr = styled(Typography)(({ theme }) => ({
    color: '#6b1cd4',
    paddingRight: '5px' 
}));