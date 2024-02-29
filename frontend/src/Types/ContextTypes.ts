
export interface ContextTypes {
  postid: number;
  title: string;
  content: string;
  date: string | Date;
  thumbnail: {
    imageid: number;
    url: string;
    postid: number;
  };
  images: {
    imageid: 16;
    url: string;
    postid: number;
  }[];
}

export interface AppContextHookTypes {
  isSigned: boolean;
  setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
  data: ContextTypes[]; // Array of ContextTypes objects
}

export interface PostContextHookTypes {
  title: string;
  date: string | Date;
  selectedFIles: File[];

  setTitle: () => void;
  setDate: () => void;
  setSelectedFiles: () => void;

  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
