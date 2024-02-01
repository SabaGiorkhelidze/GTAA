import { Flex } from "@chakra-ui/react";
import { NavbarContainerPropTypes } from "../../../Types/NavbarTypes";
import { colors } from "../../../Utils/ThemeColors";

const NavBarContainer = ({ children, ...props }: NavbarContainerPropTypes) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      px={10}
      boxShadow={'lg'}
      bg={[colors.primary[500], colors.primary[500], "transparent", "transparent"]}
      color={["white", "white", colors.primary[700], colors.primary[700]]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBarContainer;
