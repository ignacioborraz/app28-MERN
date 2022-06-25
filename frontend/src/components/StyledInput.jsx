import {useRef} from 'react'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import WorkIcon from '@mui/icons-material/Work'
import CategoryIcon from '@mui/icons-material/Category'

import Container from './Container'
import SelectCompany from '../components/SelectCompany'
import StyledIcon from './StyledIcon'

export default function StyledInput({everyData,allInputs}) {

    const input = useRef()

    function toAdd(event) {
        allInputs[everyData.id] = input.current?.value
    }

    return (
        (everyData.id!=='company') ? (
            <Container width='100%' color='rgb(224,224,224)' bgColor='rgb(2,0,3)' paddding='2px' margin='2px'>
                <label htmlFor={everyData.id}><StyledIcon>
                    {everyData.id.includes('name') ? <WorkIcon /> : 
                    everyData.id.includes('salary') ? <AttachMoneyIcon /> : 
                    (everyData.id.includes('logo') || everyData.id.includes('photo')) ? <AddAPhotoIcon /> : 
                    <CategoryIcon />}
                </StyledIcon></label>
                <input name={everyData.id} id={everyData.id} placeholder={everyData.placeholder} onKeyUp={toAdd} type="text" className='inputForm' ref={input} required/>
            </Container>
        ) : (
            <SelectCompany allInputs={allInputs} />
        )
    )

}