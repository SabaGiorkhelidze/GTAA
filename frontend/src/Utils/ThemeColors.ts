import { extendTheme } from "@chakra-ui/react";

export const colors = {
  primary: {
    100: "#E3F4FC",
    200: "#4299E1",
    300: "#3182CE",
    400: "#2B6CB0",
    500: "#2C5282",
    600: "#244E75",
    700: "#1A3D5E",
    800: "#153E56",
    900: "#112E42",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
