// import { useState } from 'react'
// import { Modal } from '@chakra-ui/react'
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import DefaultNavigation from "./Routes/DefaultNavigation";
import SignInModal from "./Components/Modal/SignInModal";
import { AppContext } from "./Context/AppContext";
import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import Loader from "./Components/Loader/Loader";
import CardLayout from "./Layouts/CardLayout";
import NotFound from "./Components/404/NotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const { data, loading, error } = useFetch("/posts");
  console.log(data);

  if (loading) return <Loader />;

  if (error) return <NotFound url="/" />;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-between',
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
