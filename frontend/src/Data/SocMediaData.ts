import { AiOutlineFacebook, AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
import { IconType } from "react-icons";

interface MediaLinksPropTypes {
  url: string;
  Icon: IconType;
  name: string;
}

export const socialMediaData: MediaLinksPropTypes[] = [
  {
    url: "https://www.facebook.com/first-person",
    Icon: AiOutlineFacebook ,
    name: "First Person",
  },
  {
    url: "https://www.instagram.com/first_person/",
    Icon: AiOutlineInstagram ,
    name: "First Person",
  },
  
  // Add similar data for the remaining two people
];
