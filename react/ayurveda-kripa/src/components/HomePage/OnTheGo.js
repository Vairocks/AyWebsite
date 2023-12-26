import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import './styles.css';
import phone_image from '../../assets/images/iPhone 13.png';
import google_play_img from '../../assets/images/google_play_button.png';
import { useTheme } from '@mui/material/styles';


function OnTheGoSection() {
  const theme = useTheme();
  return (
    <Grid container marginTop={10} marginBottom={10} className='fontBase'>
      <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant='h4' sx={{ textAlign: { xs: 'center', sm: 'start' }, fontWeight: 'Bold',  }}>Improve your Health with various app features</Typography>
        <Typography variant='subtitle' sx={{ textAlign: { xs: 'center', sm: 'start' }, }}>Easily achieving your health goals using Ayurveda Kripa App. The ancerstral secrets of Health is just one tap away</Typography>
        
          <Box sx={{ textAlign:{xs:'center',sm:'left'} }}>
            <a href="https://play.google.com/store/apps/details?id=com.aayurveda&pli=1 " target="_blank" rel="noreferrer" >
              <img src={google_play_img} alt="bottle" class="google_play_img" />
            </a></Box>
        
        <Typography variant='h6' color={theme.palette.text.secondary} sx={{ textAlign: { xs: 'center', sm: 'start' }, }}>
          Know More{'>>'}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ padding: 3, background: `linear-gradient(to right,white 0%,white 30%, 30%,${theme.palette.secondary.main} 100%)`, alignItems: 'center', justifyContent: 'center', display: "flex" }}>
        <img src={phone_image} style={{ width: '50vh' }} />
      </Grid>
    </Grid>
  )
}

export default OnTheGoSection;
