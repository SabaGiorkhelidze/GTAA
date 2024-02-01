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
import { CardPropTypes } from "../../Types/CardPropTypes";

export function Card({ id }: CardPropTypes) {

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
        Svartifoss Waterfall
      </Heading>
      <Text>
        Svartifoss is a waterfall in Skaftafell in Vatnajökull National Park in
        Iceland, and is one of the most popular sights in the park. It is
        surrounded by dark lava columns, which gave rise to its name. The base
        of this waterfall is noteworthy for its sharp rocks.
      </Text>
      <Center my="6">
        <Button colorScheme="green" onClick={handleNavigate}>
          Learn more
        </Button>
      </Center>
    </Box>
  );
}
