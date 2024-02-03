import { Input } from '@chakra-ui/react'
import { CustomDateInputPropTypes } from '../../Types/InputTypes';

const CustomDateInput = ({width, onChange}: CustomDateInputPropTypes) => {
  return (
    <div>
      <Input
        placeholder="Select Date and Time"
        width={width}   
        type="datetime-local"
        onChange={onChange}
      />
    </div>
  );
};

export default CustomDateInput;
