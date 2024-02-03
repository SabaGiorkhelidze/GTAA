import { Box } from "@chakra-ui/react";
import CustomTextArea from "../Input/CustomTextArea";

const TextAreaBox = () => {
  return (
    <>
      <Box
        width={["full", "80%", "full"]}
        alignItems={"center"}
        flex={1}
        px={10}
      >
        <CustomTextArea placeholder="Enter content here" size="100%" />
      </Box>
    </>
  );
};

export default TextAreaBox;
