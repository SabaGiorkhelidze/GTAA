import React, { useContext } from "react";
import { Center, Flex, Box, Spacer, Text } from "@chakra-ui/react";
import CustomDateInput from "../../Components/Input/CustomDateInput";
import CustomInput from "../../Components/Input/CustomInput";
import { PostContext } from "../../Context/PostContext";

const InputRowLayout = () => {
  const { handleTitleChange, handleDateChange } = useContext(PostContext);
  return (
    <>
      <Flex
        width={"full"}
        align={"center"}
        paddingRight={10}
        marginBottom={4}
        marginTop={4}
        gap={3}
        flexDirection={["column", "column", "row"]}
      >
        <Box width={["100%", "80%", "50%"]} pl={10}>
          <CustomInput variant="filled" width={"100%"} placeholder="Title" onChange={handleTitleChange}/>
        </Box>

        <Box width={["100%", "80%", "50%"]} paddingLeft={[10]}>
          <CustomDateInput width={"100%"} onChange={handleDateChange}/>
        </Box>
      </Flex>
    </>
  );
};

export default InputRowLayout;
