import {Link as LinkRouter} from 'react-router-dom'

import {Grid} from '@mui/material'
import StyledGrid from '../components/StyledGrid'
import StyledGridImg from '../components/StyledGridImg'
import Titles from '../components/Titles'

export default function VariantPage({text}) {
    return (
        <Grid container sx={{flexGrow: '1', backgroundColor: 'rgb(105,24,152)'}}>
            <StyledGridImg bgColor='rgb(100,100,100)' className='backGroundStyle bgVariant' />
            <StyledGrid bgColor='rgb(224,224,224)' direction='column'>
                <Titles variant='h2' font='Paytone One' color='rgb(105,24,152)' margin='10px'>ROSARIO JOBS</Titles>
                <Titles variant='h5' color='rgb(105,24,152)'>{text}</Titles>
                <LinkRouter to={'/'} className='linksPrincipales'>
                    go back to HOME
                </LinkRouter>
            </StyledGrid>
        </Grid>
    )
    
}