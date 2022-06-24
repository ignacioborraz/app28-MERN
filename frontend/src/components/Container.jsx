import {Box} from '@mui/material'

export default function Container({children,grow,direction,color,bgColor,pad,mar}) {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: direction,
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: grow,
            color: color,
            backgroundColor: bgColor,
            padding: pad,
            margin: mar}}>
            {children}
        </Box>
    )
    
}