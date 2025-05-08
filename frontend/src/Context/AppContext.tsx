import { createContext } from "react";
import { AppContextHookTypes } from "../Types/ContextTypes";

export const AppContext = createContext<AppContextHookTypes | undefined>(undefined);
