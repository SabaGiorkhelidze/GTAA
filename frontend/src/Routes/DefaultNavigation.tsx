import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AddPostPage from "../Pages/AddPostPage";
import AboutPage from "../Pages/AboutPage";
import ReadMore from "../Pages/ReadMore";

const DefaultNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pages/about" element={<AboutPage />} />
      <Route path="/pages/posts/:PostID" element={<ReadMore />} />
      <Route path="/addPost" element={<AddPostPage />} />
    </Routes>
  );
};

export default DefaultNavigation;
