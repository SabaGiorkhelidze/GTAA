"use client";

// import Image from 'next/image'
import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { DataTypes } from "../../Types/DataTypes";

export default function Card({ PostID, image, title, content, date }: DataTypes) {
  const navigate = useNavigate();
  const shortenContent = (content) => {
    const words = content.split(" ");
    const shortenedContent = words.slice(0, 43).join(" ");
    return shortenedContent;
  };
  const handleNavigate = (PostID: string | number) =>
    navigate(`/pages/posts/${PostID}`);
  return (
    <Center py={6}>
      <Box
        maxW={"345px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            // src={image}
            src={'http://127.0.0.1:8080/posts/image/1708525177266-image.png'}
            // fill={true}
            alt="Example"
          />
        </Box>
        <Stack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text color={"gray.500"}>{shortenContent(content)}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          {/* <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} /> */}
          <Stack
            direction={"row"}
            spacing={120}
            align={"center"}
            justify={"around"}
            fontSize={"sm"}
          >
            {/* <Text fontWeight={600}>Achim Rolle</Text> */}
            <Text color={"gray.500"}>
              {" "}
              {new Date(date)
                .toLocaleDateString("en-GB")
                .split("/")
                .join("/")}{" "}
            </Text>
            <Button
              bg="blue.700"
              color={"white"}
              _hover={{ bg: "blue.900" }}
              onClick={() => handleNavigate(PostID)}
            >
              Read More
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
