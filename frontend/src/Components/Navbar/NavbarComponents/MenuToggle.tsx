import { Box, } from "@chakra-ui/react";
import MenuIcon from "../../IconComponents/MenuIcon";
import CloseIcon from "../../IconComponents/CloseIcon";
import { MenuTogglePropTypes } from "../../../Types/NavbarTypes";
const MenuToggle = ({ toggle, isOpen }: MenuTogglePropTypes) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} cursor={'pointer'}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
