// import { useState } from 'react'
// import { Modal } from '@chakra-ui/react'
import Navbar from "./Components/Navbar/Navbar";
import DefaultNavigation from "./Routes/DefaultNavigation";
// import SignInModal from "./Components/Modal/SignInModal";
import { AppContext } from "./Context/AppContext";
import { useEffect, useState } from "react";
import useFetch from "./Hooks/useFetch";
import Loader from "./Components/Loader/Loader";
// import CardLayout from "./Layouts/CardLayout";
import NotFound from "./Components/404/NotFound";
import Footer from "./Components/Footer/Footer";
import axios from "axios";

function App() {
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const { data, loading, error } = useFetch("/posts");
  console.log(data);

  // const [image, setImage] = useState();

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/posts/image/1708623540763-image.png', { responseType: 'blob' });
  //       // console.log(response)
  //       const dataImg = response.data.data
  //       setImage(dataImg);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchImage();
  // }, [data]);
  // console.log(image)


  if (loading) return <Loader />;

  if (error) return <NotFound url="/" message={error}/>;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
      }}
      className=" app"
    >
      <AppContext.Provider value={{ isSigned, setIsSigned, data }}>
        <Navbar />
        <div className="w-[100%]">
          <DefaultNavigation />
        </div>
        <div className="mt-12 w-[100%]  ">
          <div>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
