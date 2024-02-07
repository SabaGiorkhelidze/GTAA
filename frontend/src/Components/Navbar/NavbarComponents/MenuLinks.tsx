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
      color={'blue.700'}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        
      >
        {/* <MenuItem to="/"></MenuItem> */}
        <MenuItem to="/about"> ჩვენს შესახებ </MenuItem>
        <MenuItem to="/Pricing"> ფასები </MenuItem>

        <MenuItem isLast>
          {isSigned ? (
            <MenuItem to="/addPost"> დაამატე პოსტი </MenuItem>
          ) : (
            <SignInModal />
          )}
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
