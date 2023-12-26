import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
           main:'#fff',
        },
        secondary:{
            main: '#046208',
            light: '#BDF7D8',
            dark: '#6CEBA6',
            contrastText: '#19851E',
            cardGradient: '#D0F1CD',
        },
        text:{
            primary:'#000',
            secondary:'#088E0E',
        },
        mode:'light',
    },
    
});

export {theme};