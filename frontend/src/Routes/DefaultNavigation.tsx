import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AddPostPage from "../Pages/AddPostPage";

const DefaultNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<h1>hello</h1>} />
      <Route path="/addPost" element={<AddPostPage />} />
    </Routes>
  );
};

export default DefaultNavigation;
