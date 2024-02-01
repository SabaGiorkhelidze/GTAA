import { Grid, SimpleGrid } from "@chakra-ui/react";
import { Card } from "../Components/Card/Card";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { DataTypes } from "../Types/DataTypes";
const CardLayout = () => {
    const { data } = useContext(AppContext)
  return (
    <div>
      <SimpleGrid
        columns={{ sm: 2, md: 3, xl: 4 }}
        data-type="Grid"
        gap={4}
        mb="6"
      >
        {data.map((item : DataTypes) =>(
            <Card id={item.id} title={item.title} content={item.content} date={item.date}/>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default CardLayout;
