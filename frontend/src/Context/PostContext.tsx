import { createContext } from "react";
import { PostContextHookTypes } from "../Types/ContextTypes";

export const PostContext = createContext<PostContextHookTypes | undefined>(undefined);
