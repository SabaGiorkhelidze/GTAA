import { useState, useContext } from "react";
import { Image } from "@chakra-ui/react";
import NavBarContainer from "./NavbarComponents/NavbarContainer";
import MenuToggle from "./NavbarComponents/MenuToggle";
import MenuLinks from "./NavbarComponents/MenuLinks";
import Logo from '../../assets/batman.png';
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = (): void => setIsOpen(!isOpen);
  const {isSigned, setIsSigned} = useContext(AppContext);
  

  return (
    <NavBarContainer>
      <Image src={Logo} boxSize={'60px'} objectFit={'contain'} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
