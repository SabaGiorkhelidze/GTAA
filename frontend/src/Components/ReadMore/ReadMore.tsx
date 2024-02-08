import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useFetchByID from "../../Hooks/useFetchByID";
import NotFound from "../404/NotFound";
import Loader from "../Loader/Loader";

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

  const color = useColorModeValue(
    "radial(orange.600 1px, transparent 1px)",
    "radial(orange.300 1px, transparent 1px)"
  );
  const grayColor = useColorModeValue("gray.700", "gray.200");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound url={"/"} message={error} />;
  }

  console.log(post);
  return (
    <Container maxW={"7xl"} p="12">
      {/* <Heading as="h1">Stories by Chakra Templates</Heading> */}
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
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
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={color}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              {post.title}
            </Text>
          </Heading>
          <Text as="p" marginTop="2" color={grayColor} fontSize="lg">
            {firstPart}
            {/* {content} */}
          </Text>
        </Box>
      </Box>

      {/* <Divider marginTop="5" /> */}
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        {/* <Heading as="h2">What we write about</Heading> */}
        <Text as="p" fontSize="lg">
          {remainingPart && remainingPart}
        </Text>
      </VStack>
    </Container>
  );
};

export default ReadMore;
