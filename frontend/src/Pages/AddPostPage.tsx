import InputLayout from "../Layouts/PostsPageLayouts/InputLayout";
import { PostContext } from "../Context/PostContext";
import axios from "axios";
import { useState } from "react";


const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<string[]>([]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    setFile(filesArray);
  };

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    file.forEach((elem) => {
      formData.append("image", elem);
    });
    // formData.append("description", description);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("date", date);

    const result = await axios.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(file);
  };

  
  return (
    <PostContext.Provider
      value={{
        title,
        date,
        setDate,
        setTitle,
        handleDateChange,
        handleFileChange,
        handleTitleChange,
        handleContentChange,
      }}
    >
      <form onSubmit={submit}>
        <div className="w-full h-full">
          <InputLayout />
        </div>
      </form>
    </PostContext.Provider>
  );
};

export default AddPostPage;
