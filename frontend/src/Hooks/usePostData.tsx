import { useState } from "react";
import axios from "axios";

interface PostData {
  title: string;
  date: string;
  content: string;
}

interface UsePostDataOptions {
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

const usePostData = ({ onSuccess, onError }: UsePostDataOptions = {}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const postData = async (data: PostData) => {
    try {
      setIsLoading(true);

      // Make the POST request
      const response = await axios.post("http://localhost:8080/posts", data);

      // Handle success
      if (onSuccess) {
        onSuccess();
        console.log(response.data)

      }
    } catch (error) {
      // Handle error
      console.error("Error posting data:", error);

      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return { postData, isLoading };
};

// ... rest of the frontend code

export default usePostData