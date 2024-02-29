import { SimpleGrid } from "@chakra-ui/react";
import Card from "../Components/Card/Card";
import { useContext} from "react";
import { AppContext } from "../Context/AppContext";
import { ContextTypes } from "../Types/ContextTypes";

const CardLayout = () => {
  const appcontext = useContext(AppContext);
  // console.log('cardLayoutData is: ', data)


  return (
    <div className="">

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }}
        data-type="Grid"
        gap={4}
        mb="6"
      >
        {appcontext?.data.map((item: ContextTypes) => (
          <Card
            image={item.thumbnail.url}
            PostID={item.postid}
            title={item.title}
            content={item.content}
            date={item.date}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default CardLayout;
