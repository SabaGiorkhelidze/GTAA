import { Center, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface MediaLinksPropTypes {
    url: string,
    // Icon: IconType,
    name: string
}

const MediaLinks = ({url,  name}: MediaLinksPropTypes) => {
  return (
    <>
      <Link href={url}>
        <Center>
          {/* <Icon className="text-xl text-blue-500" /> */}
          <Text px={3}> {name} </Text>
        </Center>
      </Link>
    </>
  );
};

export default MediaLinks;
