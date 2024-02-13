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
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import { useState, useEffect } from "react";

const ReadMore = () => {
  const { PostID } = useParams();
  console.log(PostID);
  const { data, loading, error } = useFetchByID(`/posts/${PostID}`);
  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/posts/${PostID}`);
  //       setData(response.data.data);
  //     } catch (err: any) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const { post, images } = data;
  console.log(images);
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
  const urls = images.map((img) => img.url);
  console.log(urls);
  return (
    <Container maxW={"7xl"} p={{ base: "5", md: "12" }}>
      {/* <Heading as="h1">Stories by Chakra Templates</Heading> */}
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
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
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

      {/* <Divider marginTop="5" /> */}
      <VStack paddingTop="60px" spacing="2" alignItems="flex-start">
        <Text as="p" fontSize="lg">
          {remainingPart && remainingPart}
        </Text>
      </VStack>
    </Container>
  );
};

export default ReadMore;
