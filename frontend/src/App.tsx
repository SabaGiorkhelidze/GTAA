// import { useState } from 'react'
// import { Modal } from '@chakra-ui/react'
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import DefaultNavigation from "./Routes/DefaultNavigation";
import SignInModal from "./Components/Modal/SignInModal";
import { AppContext } from "./Context/AppContext";
import { useState } from "react";
import { Card } from "./Components/Card/Card";
import useFetch from "./Hooks/useFetch";

function App() {
  const [isSigned, setIsSigned] = useState<boolean>(false)
  const { data, loading, error } = useFetch('http://localhost:8080/posts/3');
  console.log(data)
  return (
    <>
      <AppContext.Provider value={{isSigned, setIsSigned}}>
        <Navbar />
        {/* <SignInModal /> */}
        {/* <DefaultNavigation /> */}
        <Card />
      </AppContext.Provider>
    </>
  );
}

export default App;
