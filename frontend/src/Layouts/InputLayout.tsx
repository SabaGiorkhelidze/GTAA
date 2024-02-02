import React from "react";
import CustomInput from "../Components/Input/CustomInput";
import CustomDateInput from "../Components/Input/CustomDateInput";
import { Center, Flex, Box, Spacer, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import CustomTextArea from "../Components/Input/CustomTextArea";

const InputLayout = () => {
  return (
    <>
      <Flex width={"full"} align={"center"} flexDirection={"column"}>
        <Center my={2}>
          <Text fontSize={"2xl"}>Add Post</Text>
        </Center>
        <Flex
          width={"full"}
          align={"center"}
          marginBottom={4}
          marginTop={4}
          gap={3}
          flexDirection={["column", "column", "row"]}
        >
          <Box width={["100%", "80%", "50%"]} px={10}>
            <CustomInput variant="filled" width={"100%"} placeholder="Title" />
          </Box>

          <Box width={["100%", "80%", "50%"]} px={10}>
            <CustomDateInput width={"100%"} />
          </Box>
        </Flex>

        <Box width={["full", "80%", "full"]} alignItems={"center"} flex={1} px={10}>
          <CustomTextArea placeholder="Enter content here" size="100%" />
        </Box>
      </Flex>
    </>
  );
};

export default InputLayout;
