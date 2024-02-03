import { Center, Flex, Box, Text, Button } from "@chakra-ui/react";
import CustomTextArea from "../../Components/Input/CustomTextArea";
import InputRowLayout from "./InputRowLayout";
import Header from "../../Components/PostHeader/Header";
import TextAreaBox from "../../Components/TextAreaBox/TextAreaBox";
import Dropzone from "../../Components/DropZone/Dropzone";
import { DropzoneButton } from "../../Components/Dropzone/Dropzone";

const InputLayout = () => {
  return (
    <>
      <Flex width={"full"} align={"center"} flexDirection={"column"}>
        <Header />

        <InputRowLayout />
        
        <Box
          width={["100%", "70%", "50%"]}
          marginTop={4}
          marginBottom={4}
          padding={["10%", "0%"]}
        >
          <Dropzone />
        </Box>
        
        <TextAreaBox />

        <Box alignSelf={["center", "center", "flex-end"]}>
          <Button
            colorScheme="green"
            marginRight={10}
            marginTop={5}
            px={6}
            py={2}
            mb={4}
          >
            Add Post
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default InputLayout;
