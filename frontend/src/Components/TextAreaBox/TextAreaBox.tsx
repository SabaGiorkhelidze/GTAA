import { Box } from "@chakra-ui/react";
import CustomTextArea from "../Input/CustomTextArea";
import { useContext } from "react";
import { PostContext } from "../../Context/PostContext";
import { PostContextHookTypes } from "../../Types/ContextTypes";


const TextAreaBox = () => {
  const postContextData = useContext(PostContext)
  return (
    <>
      <Box
        width={["full", "80%", "full"]}
        alignItems={"center"}
        flex={1}
        px={10}
      >
        <CustomTextArea placeholder="Enter content here" size="100%" onChange={postContextData?.handleContentChange} />
      </Box>
    </>
  );
};

export default TextAreaBox;
