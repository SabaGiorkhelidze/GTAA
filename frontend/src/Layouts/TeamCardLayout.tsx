import React from "react";
import TeamCard from "../Components/Card/TeamCard";
import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import { TeamData, TeamDataTypes } from "../Data/TeamData";

const TeamCardLayout = () => {
  const numCards = 4; // Change this to the number of cards you want to test

  return (
    <div className=" bg-gray-400">
      <Center mb={6} mt={16} pt={4}>
        <Text fontSize={"2xl"}>გაიცანით ჩვენი გუნდი</Text>
      </Center>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }}
        data-type="Grid"
        gap={4}
        mb="6"
      >
        {TeamData.map(
          ({ img, fullName, position, contactInfo }: TeamDataTypes) => (
            <TeamCard
              img={img}
              fullName={fullName}
              position={position}
              contactInfo={contactInfo}
            />
          )
        )}
      </SimpleGrid>
    </div>
  );
};

export default TeamCardLayout;
