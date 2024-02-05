import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: '50%',
        right: '50%'
      }}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text color={'blue.500'} fontSize={20} alignContent={'center'}>Loading</Text>
    </div>
  );
};

export default Loader;
