// import { useState } from 'react'
// import { Modal } from '@chakra-ui/react'
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import DefaultNavigation from "./Routes/DefaultNavigation";
import SignInModal from "./Components/Modal/SignInModal";
import { AppContext } from "./Context/AppContext";
import { useState } from "react";

function App() {
  const [isSigned, setIsSigned] = useState<boolean>(false)
  return (
    <>
      <AppContext.Provider value={{isSigned, setIsSigned}}>
        <Navbar />
        {/* <SignInModal /> */}
        {/* <DefaultNavigation /> */}
      </AppContext.Provider>
    </>
  );
}

export default App;
