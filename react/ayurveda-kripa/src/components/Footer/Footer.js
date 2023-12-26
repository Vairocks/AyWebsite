import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
const Footer = () => {

    const theme = useTheme()

    return (
        <Grid container  sx={{p:2,background: `linear-gradient(to right,white ,${theme.palette.secondary.dark} 100%)`,}}>
            <Grid item sm={12} md={4}>
            1
            </Grid> 
            <Grid item sm={12} md={4}>
            2
            </Grid> 
            <Grid item sm={12} md={4}>
            3
            </Grid> 

        </Grid>
    )
}

export default Footer
