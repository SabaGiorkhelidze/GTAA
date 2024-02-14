import {
  Heading,
  Avatar,
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
} from "@chakra-ui/react";

import MediaLinks from "../SocialMediaLinks/MediaLinks";
import IconBox from "../SocialMediaLinks/IconBox.tsx";
import CustomBadge from "../Badge/CustomBadge.tsx";
import { TeamDataTypes } from "../../Data/TeamData.ts";
export default function TeamCard({img, fullName, position, contactInfo}: TeamDataTypes) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            img
          }
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {fullName}
        </Heading>


        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <CustomBadge badgeTitle={position} />
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          
          {/* Note: this is for further use, when i will add the get more info about person in the v2 */}
          {/* <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            See More about person
          </Button> */}
          {/* End Of Note */}

          <Popover>
            <PopoverTrigger>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.600"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.800",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Follow
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody borderWidth={4}>
                {/* Note: this is iterable component to */}
                {contactInfo.map((info) => (
                    <Flex
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    px={12}
                  >
                    
                    <Stack>
                      <IconBox Icon={info.Icon} />
                    </Stack>
                    <Stack>
                      <MediaLinks url={info.url} name={info.name} />
                    </Stack>
                  </Flex>
                  ))}
                {/* End Of Note */}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Box>
    </Center>
  );
}
