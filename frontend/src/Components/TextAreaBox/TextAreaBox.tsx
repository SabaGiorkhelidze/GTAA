import { Box } from "@chakra-ui/react";
import CustomTextArea from "../Input/CustomTextArea";
import { useContext } from "react";
import { PostContext } from "../../Context/PostContext";

const TextAreaBox = () => {
  const {handleContentChange} = useContext(PostContext)
  return (
    <>
      <Box
        width={["full", "80%", "full"]}
        alignItems={"center"}
        flex={1}
        px={10}
      >
        <CustomTextArea placeholder="Enter content here" size="100%" onChange={handleContentChange}/>
      </Box>
    </>
  );
};

export default TextAreaBox;
