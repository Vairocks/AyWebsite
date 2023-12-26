import { Grid, Avatar, Paper, Chip } from '@mui/material';
import React from 'react';
import herbs from '../../../src/assets/images/herbs.png';
import consultation from '../../../src/assets/images/consultation.png';
import knowledge from '../../../src/assets/images/knowledge.png';
import {useTheme} from '@mui/material/styles'
import { theme } from '../../utils/appTheme';

const aows = [
    { image: herbs, title: 'Ayurveda Shop' },
    { image: consultation, title: 'Ayurvedic Consultation' },
    { image: knowledge, title: 'Ayurvedic Knowledge' },
]

const AreaOfWork = () => {

    const theme = useTheme();

    return (
        <Grid container marginTop={10} marginBottom={10} >
            {aows.map((area, index) => {
                return (
                    <Grid item container key={index} xs={12}  sm={4} sx={{justifyContent:'center',alignItems:'center',marginBottom:5}}>
                        <Grid item xs={3} sm={12}>
                            <Avatar sx={{ width:'90%',height:'90%'}} alt="Remy Sharp" src={area.image} />
                        </Grid>
                        <Grid item xs={8} sm={12} >
                             <Chip label={area.title} color={'success'} 
                             sx={{color:'white',backgroundColor:theme.palette.secondary.contrastText, width:'90%',marginTop:{xs:0,sm:3}}} />
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default AreaOfWork
