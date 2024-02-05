import { IconType } from "react-icons";
import { Box, Center, Stack } from "@chakra-ui/react";

const IconBox = ({ Icon }: { Icon: IconType }) => {
  return (
    <Box>
      <Center>
        <Stack>
          <Icon className="text-xl text-blue-500" />
        </Stack>
      </Center>
    </Box>
  );
};

export default IconBox;
