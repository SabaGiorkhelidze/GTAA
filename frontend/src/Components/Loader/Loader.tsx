import { Flex, Spinner } from "@chakra-ui/react";
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
        color="green.500"
        size="xl"
      />
    </div>
  );
};

export default Loader;
