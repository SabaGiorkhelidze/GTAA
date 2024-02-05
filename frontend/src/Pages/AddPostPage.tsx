import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import CustomInput from "../Components/Input/CustomInput";
import CustomTextArea from "../Components/Input/CustomTextArea";
import CustomDateInput from "../Components/Input/CustomDateInput";
import InputLayout from "../Layouts/PostsPageLayouts/InputLayout";
import { PostContext } from "../Context/PostContext";
import { FileDetails } from "../Types/FileTypes";
import usePostData from "../Hooks/usePostData";

interface PostData {
  title: string;
  date: string;
  content: string;
  files: FileDetails[] | null;
}

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileDetails[] | []>([]);
  const [content, setContent] = useState("");

  const { postData, isLoading } = usePostData({
    onSuccess: () => {
      // Add any logic you want to execute on successful post here
      console.log("Post successful!");
    },
    onError: (error) => {
      // Add any logic you want to execute on post error here
      console.error("Error posting data:", error);
    },
  });

  const handleFileChange = (event: { target: { files: File[] } }) => {
    const files = event.target.files;
    const filesDetails = Array.from(files).map((file) => ({
      name: file.name,
      location: URL.createObjectURL(file),
      size: file.size,
    }));

    setSelectedFiles(filesDetails);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleAddPost = () => {
    // Fetch your data from the context or wherever you have it
    const postDataObject: PostData = {
      title,
      date,
      content,
      files: selectedFiles as FileDetails[] | null,
    };

    // Call the custom hook to send the post request
    console.log(postDataObject)
    postData(postDataObject);
  };

  // console.log(isLoading);

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
        handleFileChange,
        handleTitleChange,
        handleContentChange,
        handleAddPost,
        isLoading,
      }}
    >
      <div className="w-full h-full">
        <InputLayout />
      </div>
    </PostContext.Provider>
  );
};

export default AddPostPage;
