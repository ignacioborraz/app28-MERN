import {Link as LinkRouter} from 'react-router-dom'

import {Grid} from '@mui/material'
import StyledGrid from '../components/StyledGrid'
import StyledGridImg from '../components/StyledGridImg'
import Text from '../components/Text'

export default function VariantPage({text}) {
    return (
        <Grid container sx={{flexGrow: '1', backgroundColor: 'rgb(2,0,3)'}}>
            <StyledGridImg bgColor='rgb(224,224,224)' className='backGroundStyle bgVariant' />
            <StyledGrid bgColor='rgb(224,224,224)' direction='column'>
                <Text variant='h2' font='Paytone One' color='rgb(105,24,152)' margin='0 0 10px 0'>
                    rosarioJobs
                </Text>
                <Text variant='h5' color='rgb(105,24,152)' margin='0 0 10px 0'>
                    {text}
                </Text>
                <LinkRouter to={'/'}>
                    <Text color='rgb(224,224,224)' bgColor='rgb(105,24,152)' hover='rgb(2,0,3)' padding='10px'>
                        back to HOME
                    </Text>
                </LinkRouter>
            </StyledGrid>
        </Grid>
    )
    
}