import React from 'react'
import { Input } from '@chakra-ui/react'
import { CustomInputPropTypes } from '../../Types/InputTypes'



const CustomInput = ({width, variant, placeholder}: CustomInputPropTypes) => {
  return (
    <div>
        <Input variant={variant} placeholder={placeholder}  width={width} />
    </div>
  )
}

export default CustomInput