import { createContext } from "react";
import { NavbarUseContextHookTypes } from "../Types/ContextTypes";

export const AppContext = createContext<NavbarUseContextHookTypes | {}>({});
