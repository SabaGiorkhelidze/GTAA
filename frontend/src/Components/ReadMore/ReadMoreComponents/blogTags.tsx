import { HStack, SpaceProps, Tag } from "@chakra-ui/react";

interface Props {
  marginTop?: number;
  tags: any[];
}

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}
const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};
