import { Textarea } from "@chakra-ui/react";
import { TextAreaPropTypes } from "../../Types/InputTypes";

const CustomTextArea = ({ placeholder, onChange, size }: TextAreaPropTypes) => {
  return (
    <div className="">
      <Textarea
        placeholder={placeholder}
        width={size}
        variant={["outline", "filled"]}
        height={"200px"}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomTextArea;
