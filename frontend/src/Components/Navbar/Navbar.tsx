import { useState, useContext } from "react";
import { Image } from "@chakra-ui/react";
import NavBarContainer from "./NavbarComponents/NavbarContainer";
import MenuToggle from "./NavbarComponents/MenuToggle";
import MenuLinks from "./NavbarComponents/MenuLinks";
import Logo from "../../assets/logo.png";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = (): void => setIsOpen(!isOpen);
  const { isSigned, setIsSigned } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <Image
        src={Logo}
        boxSize={"60px"}
        objectFit={"contain"}
        cursor={"pointer"}
        onClick={() => navigate("/")}
        filter={{ base: "invert(100%)", sm: "invert(100%)", md: "none" }}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Navbar;
