import React from 'react'
import '../styles/styles.css'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function CompFuncionalConProps({texto,nombres}) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            color: 'white',
            backgroundColor: 'rgb(100, 150, 100)'
        }}>
            <Typography variant="h1" sx={{
                height: '100px',
                fontSize: '50px',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                    backgroundColor: 'red',
                    opacity: [0.9, 0.8, 0.7]}
            }}>
                {texto}
            </Typography>
            {nombres.map(cadaElemento =>
                <Typography variant="h1" sx={{
                    height: '40px',
                    fontSize: '25px',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                        backgroundColor: 'yellow',
                        opacity: [0.9, 0.8, 0.7]}
                }}>{cadaElemento}</Typography>
            )}
        </Box>
    )
}

export default CompFuncionalConProps