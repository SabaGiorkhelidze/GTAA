import React from "react";
import { Badge, useColorModeValue } from "@chakra-ui/react";
const CustomBadge = ({ badgeTitle }: { badgeTitle: string }) => {
  return (
    <>
      <Badge
        px={2}
        py={1}
        bg={useColorModeValue("gray.100", "gray.800")}
        fontWeight={"400"}
      >
        {badgeTitle}
      </Badge>
    </>
  );
};

export default CustomBadge;
