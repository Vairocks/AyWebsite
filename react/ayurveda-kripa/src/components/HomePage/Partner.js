import { Grid } from '@mui/material';
import React from 'react'
import images from '../../assets/images/brands';
import { useTheme } from '@mui/material/styles';

const Partner = () => {
  const theme = useTheme();
  return (
    <Grid container marginTop={10} marginBottom={10} style={{backgroundColor:theme.palette.secondary.main,alignItems: 'center', justifyContent: 'center' }}>

      {images.map((brand_image, index) =>
        <Grid xs={3} md={2} lg={1.5} sx={{margin:5, alignItems: 'center', justifyContent: 'center', display: "flex"}}>
          <img src={brand_image} width={"100%"} />
        </Grid>
      )}
    </Grid>
  )
}

export default Partner; 