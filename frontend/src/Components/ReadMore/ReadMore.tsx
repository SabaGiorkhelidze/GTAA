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
  const color = useColorModeValue(
    "radial(orange.600 1px, transparent 1px)",
    "radial(orange.300 1px, transparent 1px)"
  );
  const grayColor = useColorModeValue("gray.700", "gray.200")
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound url={"/"} message={error} />;
  }

  console.log(data);
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Stories by Chakra Templates</Heading>
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
              Blog article title
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={grayColor}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </Text>
        </Box>
      </Box>

      {/* <Divider marginTop="5" /> */}
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        {/* <Heading as="h2">What we write about</Heading> */}
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu
          tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat
          consequat, commodo massa quis, feugiat sapien. Suspendisse placerat
          vulputate posuere. Curabitur neque tortor, mattis nec lacus non,
          placerat congue elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec condimentum quam arcu, eu tempus tortor
          molestie at. Vestibulum pretium condimentum dignissim. Vestibulum
          ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo
          massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
          pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
          imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
          sapien. Suspendisse placerat vulputate posuere. Curabitur neque
          tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack>
    </Container>
  );
};

export default ReadMore;
