import { DataTypes } from "./DataTypes";

export interface NavbarUseContextHookTypes extends DataTypes {
  isSigned: Boolean;
  setIsSigned: React.Dispatch<React.SetStateAction<boolean>>;
  data: DataTypes[];
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
}
