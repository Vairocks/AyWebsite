import React from 'react'
import { Typography,Grid } from '@mui/material';
import hero_image from '../../assets/images/home_hero_img.png';
import './styles.css';
import { useTheme } from '@mui/material/styles';


const HeroSection=()=> {

    const theme = useTheme();

  return (
   <Grid container marginTop={10} marginBottom={10}>
    <Grid item xs={12} sm={6} sx={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
        <Typography variant='h2' sx={{textAlign: {xs:'center',sm:'start'},fontWeight:'500'}}>Welcome to <span style={{color:theme.palette.text.secondary,fontWeight:'bold'}}>Ayurveda Kripa</span></Typography>
        <Typography variant='h6' sx={{textAlign: {xs:'center',sm:'start'}}}>Ayurveda Customised for your lifes.</Typography>

    </Grid>
    <Grid item xs={12} sm={6} sx={{padding:3, background: `linear-gradient(to right,white 0%,white 30%, 30%,${theme.palette.secondary.main} 100%)`, alignItems:'center',justifyContent:'center',display:"flex"}}>
        <img src={hero_image} style={{width:'50vh'}} />
    </Grid>
   </Grid>
    );

}

export default HeroSection
