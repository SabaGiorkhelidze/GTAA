import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
import { IconType } from "react-icons";
import zura from "../assets/zura.jpeg";
export interface TeamDataTypes {
  img: string;
  fullName: string;
  position: string;
  contactInfo: MediaLinksPropTypes[];
}
interface contactInfoDataTypes {
  facebook: string;
  instagram: string;
  linkedIn?: string;
}

interface MediaLinksPropTypes {
  url: string;
  Icon: IconType;
  name: string;
}

export const TeamData: TeamDataTypes[] = [
  {
    img: zura,
    fullName: "ზურა ბერუაშვილი",
    position: "თავმჯდომარე",
    contactInfo: [
      {
        url: "https://www.facebook.com/first-person",
        Icon: AiOutlineFacebook,
        name: "First Person",
      },
    ],
  },
];
