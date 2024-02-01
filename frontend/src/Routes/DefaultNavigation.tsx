import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const DefaultNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/post/:id' element={<h1>hello</h1>} />
    </Routes>
  );
};

export default DefaultNavigation;
