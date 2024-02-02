import React from 'react'
import { Textarea } from '@chakra-ui/react'
import { TextAreaPropTypes } from '../../Types/InputTypes'

const CustomTextArea = ({placeholder, onChange, size}: TextAreaPropTypes) => {
  return (
    <div className=''>
        <Textarea placeholder={placeholder} width={size} variant={'outline'} height={'200px'}/>
    </div>
  )
}

export default CustomTextArea