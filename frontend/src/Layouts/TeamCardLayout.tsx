import TeamCard from "../Components/Card/TeamCard";
import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import { TeamData, TeamDataTypes } from "../Data/TeamData";

const TeamCardLayout = () => {
  return (
    <div className=" ">
      <Center mb={6} mt={16} pt={4}>
        <Text fontSize={"2xl"}>გაიცანით ჩვენი გუნდი</Text>
      </Center>
      <SimpleGrid
      //{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }
        columns={1}
        data-type="Grid"
        gap={4}
        alignContent={'center'}
        justifyContent="center"
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
