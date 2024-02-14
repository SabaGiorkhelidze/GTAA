import { Input } from '@chakra-ui/react'
import { CustomInputPropTypes } from '../../Types/InputTypes'



const CustomInput = ({width, variant, placeholder, onChange}: CustomInputPropTypes) => {
  return (
    <div>
        <Input variant={variant} placeholder={placeholder}  width={width} onChange={onChange}/>
    </div>
  )
}

export default CustomInput