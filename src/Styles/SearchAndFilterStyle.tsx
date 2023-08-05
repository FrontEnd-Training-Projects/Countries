import { styled, TextField, FormControl } from "@mui/material";

export const MyTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        width: '300px'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgb(154 169 175)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#9c9efb',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgb(154 169 175)'
    },
    '& input': {
        color: 'rgb(154 169 175)'
    }
}));

export const MyFromControl = styled(FormControl)(({ theme }) => ({
    width: '300px',
    
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgb(154 169 175)',
            borderWidth: '1.5px'
        },
        '&:hover fieldset': {
            borderColor: '#7276ff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#9c9efb',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgb(154 169 175)'
    },
    '& input': {
        color: 'rgb(154 169 175)'
    }
}));