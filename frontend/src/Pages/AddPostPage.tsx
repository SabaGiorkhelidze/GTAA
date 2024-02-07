// import React, { useEffect, useState } from "react";
import { Button, filter } from "@chakra-ui/react";
import CustomInput from "../Components/Input/CustomInput";
import CustomTextArea from "../Components/Input/CustomTextArea";
import CustomDateInput from "../Components/Input/CustomDateInput";
import InputLayout from "../Layouts/PostsPageLayouts/InputLayout";
import { PostContext } from "../Context/PostContext";
import { FileDetails } from "../Types/FileTypes";
// import usePostData from "../Hooks/usePostData";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

// interface PostData {
//   title: string;
//   date: string;
//   content: string;
//   files: FileDetails[] | null;
// }

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]); //<FileDetails[] | []>
  const [content, setContent] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  

  return (
    <PostContext.Provider
      value={{
        title,
        date,
        selectedFiles,
        setDate,
        setTitle,
        setSelectedFiles,
        handleDateChange,
        // handleFileChange,
        handleTitleChange,
        handleContentChange,
        // handleAddPost,
        // isLoading,
      }}
    ></PostContext.Provider>
  );
};

export default AddPostPage;
