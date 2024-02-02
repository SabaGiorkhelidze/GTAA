import { Input } from '@chakra-ui/react'
import { CustomDateInputPropTypes } from '../../Types/InputTypes';

const CustomDateInput = ({width}: CustomDateInputPropTypes) => {
  return (
    <div>
      <Input
        placeholder="Select Date and Time"
        width={width}   
        type="datetime-local"
        // className='w-1/2'
      />
    </div>
  );
};

export default CustomDateInput;
