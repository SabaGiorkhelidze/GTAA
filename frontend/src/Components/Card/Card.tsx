"use client";

// import Image from 'next/image'
import {
  Box,
  Image,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { DataTypes } from "../../Types/DataTypes";

export default function Card({ PostID, title, content, date }: DataTypes) {
  const navigate = useNavigate();
  console.log(PostID);
  const shortenContent = (content) => {
    const words = content.split(' ');
    const shortenedContent = words.slice(0, 43).join(' ');
    return shortenedContent;
  };
  const handleNavigate = (PostID: string | number) =>
    navigate(`posts/${PostID}`);
  return (
    <Center py={6}>
      <Box
        maxW={"345px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
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
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
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
            spacing={150}
            align={"center"}
            // justify={'between'}
            fontSize={"sm"}
          >
            {/* <Text fontWeight={600}>Achim Rolle</Text> */}
            <Text color={"gray.500"}> date </Text>
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
