import React, { useState } from "react";
import CustomInput from "../Components/Input/CustomInput";
import CustomTextArea from "../Components/Input/CustomTextArea";
import CustomDateInput from "../Components/Input/CustomDateInput";
import InputLayout from "../Layouts/PostsPageLayouts/InputLayout";
import { PostContext } from "../Context/PostContext";
import { FileDetails } from "../Types/FileTypes";

const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileDetails[] | []>([]);

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

  console.log("Title:", title, "Date:", date, "Selected Files:", selectedFiles);

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
      }}
    >
      <div>
        <InputLayout />
      </div>
    </PostContext.Provider>
  );
};

export default AddPostPage;
