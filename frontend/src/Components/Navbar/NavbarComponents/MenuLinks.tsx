import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { NavbarMenuLinksPropTypes } from "../../../Types/NavbarTypes";
import MenuItem from "./MenuItem";
import { colors } from "../../../Utils/ThemeColors";
import SignInModal from "../../Modal/SignInModal";
import { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

const MenuLinks = ({ isOpen }: NavbarMenuLinksPropTypes) => {
  const { isSigned } = useContext(AppContext);

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {/* <MenuItem to="/"></MenuItem> */}
        <MenuItem to="/how"> About Us </MenuItem>
        <MenuItem to="/faetures"> Features </MenuItem>

        <MenuItem isLast>
          {/* <Button
            size="sm"
            rounded="md"
            color={[colors.primary[500], colors.primary[500], "white", "white"]}
            bg={["white", "white", colors.primary[500], colors.primary[500]]}
            _hover={{
              bg: [
                colors.primary[100],
                colors.primary[100],
                colors.primary[600],
                colors.primary[600],
              ],
            }}
          >
            Sing In
          </Button> */}
          {isSigned ? (
            <MenuItem to="/faetures"> Add Post </MenuItem>
          ) : (
            <SignInModal />
          )}
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
