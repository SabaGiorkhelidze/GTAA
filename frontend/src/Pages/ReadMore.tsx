import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFetchByID from "../Hooks/useFetchByID";
import NotFound from "../Components/404/NotFound";
import Loader from "../Components/Loader/Loader";
import Carousel from "../Components/Carousel/Carousel";

const ReadMore = () => {
  const { PostID } = useParams();
  console.log(PostID);
  const { data, loading, error } = useFetchByID(`/posts/${PostID}`);

  const { post, images } = data;

  const content = post && post.content ? post.content : "";

  function splitText(content) {
    if (!content || typeof content !== "string") {
      console.error("Invalid content");
      return { firstPart: "", remainingPart: "" };
    }
    const words = post.content.trim().split(/\s+/);
    if (words.length <= 100) {
      return { firstPart: content, remainingPart: "" };
    }

    const firstPart = words.slice(0, 105).join(" ");
    const remainingPart = words.slice(105).join(" ");

    return { firstPart, remainingPart };
  }

  const { firstPart, remainingPart } = splitText(content);

  const grayColor = useColorModeValue("gray.700", "gray.200");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound url={"/"} message={error} />;
  }
  const urls = images.map((img) => img.url);

  return (
    <Container maxW={"7xl"} p={{ base: "5", md: "12" }}>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            className=" flex md:justify-center md:items-center"
            width={{ base: "100%", sm: "90%" }}
            height={{ base: "300px", lg: "" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="2%"
          >
            <Box
              textDecoration="none"
              width={"100%"}
              height={"100%"}
              _hover={{ textDecoration: "none" }}
              className="flex justify-center items-center "
            >
              <Carousel imgURL={urls} />
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "20", lg: '1' }}
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              {post.title}
            </Text>
          </Heading>
          <Text as="p" marginTop="2" color={grayColor} fontSize="lg">
            {firstPart}
          </Text>
        </Box>
      </Box>

      <VStack paddingTop="60px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          {remainingPart && remainingPart}
        </Text>
      </VStack>
    </Container>
  );
};

export default ReadMore;
