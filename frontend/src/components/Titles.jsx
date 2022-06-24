import {Typography} from '@mui/material'

export default function Container({children,font,grow,variant,color,bgColor,padding,margin}) {

    return (
        <Typography variant={variant} sx={{
            fontFamily: font,
            fontSize: variant==='h1' ? {xs: '45px', sm: '60px', md: '75px', lg: '96px'} :
                        variant==='h2' ? {xs: '35px', sm: '35px', md: '45px', lg: '60px'} :
                        variant==='h3' ? {xs: '25px', sm: '30px', md: '35px', lg: '48px'} :
                        variant==='h4' ? {xs: '18px', sm: '24px', md: '30px', lg: '34px'} :
                        variant==='h5' ? {xs: '15px', sm: '18px', md: '24px', lg: '24px'} :
                                        {xs: '12px', sm: '15px', md: '18px', lg: '20px'},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: grow,
            textAlign: 'center',
            color: color,
            backgroundColor: bgColor,
            padding: padding,
            margin: margin}}>
            {children}
        </Typography>
    )
    
}