import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DataTypes } from "../../Types/DataTypes";

export function Card({ id, title, content, date }: DataTypes) {

  const navigate = useNavigate();
  const handleNavigate = () => navigate(`post/${id}`);
  
  return (
    <Box maxW="420px" bg="white" p="6" borderWidth={1} borderRadius={"xl"}>
      <Image
        src="https://images.unsplash.com/photo-1667420170858-39d40cb413e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Svartifoss Waterfall"
        borderRadius="xl"
        objectFit="cover"
        mx="auto"
      />

      <Heading my="4" size="lg">
        {title}
      </Heading>
      <Text>
        {content}
      </Text>
      <Center my="6">
        <Button colorScheme="green" onClick={handleNavigate}>
          Learn More
        </Button>
      </Center>
    </Box>
  );
}
