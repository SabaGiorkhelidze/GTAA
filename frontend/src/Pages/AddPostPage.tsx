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
  // const handleFileChange = (event: any) => {
  //   const files = event.target.files;
  //   const fileDetail = Array.from(files).map((file) => ({
  //     url: file.name,
  //     file: file,
  //   }));
  //   setSelectedFiles(fileDetail)
  // };

  // const handleAddPost = (data, ) => {

  // }
  const [file, setFile] = useState([]);
  // const [description, setDescription] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    file.forEach((elem) => {
      formData.append("image", elem);
    });
    // formData.append("description", description);

    const result = await axios.post("http://localhost:8080/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(result.data);
    console.log(file);
    // Send the file and description to the server
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
        setFile,
        file
      }}
    >
      <form onSubmit={submit}>
        <div className="w-full h-full">
          <InputLayout />
        </div>
      </form>

      {/* <form onSubmit={submit}>
        <input
          name="image"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            setFile([...file, ...files]);
          }}
          type="file"
          accept="image/*"
          multiple
        ></input>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form> */}
    </PostContext.Provider>
  );
};

export default AddPostPage;
