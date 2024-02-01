import { MenuItemPropTypes } from "../../../Types/NavbarTypes";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const MenuItem = ({children, isLast, to = "/",...rest}: MenuItemPropTypes) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
