import { DataTypes } from "./DataTypes";

export interface NavbarUseContextHookTypes extends DataTypes {
    isSigned: Boolean,
    setIsSigned: React.Dispatch<React.SetStateAction<boolean>>
    data: DataTypes[],
}