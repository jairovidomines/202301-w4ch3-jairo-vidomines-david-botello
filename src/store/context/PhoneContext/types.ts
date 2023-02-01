import { Dispatch } from "react";

interface PhoneContextStructure {
  phoneContext: string;
  setPhoneContext: Dispatch<React.SetStateAction<string>>;
}
export default PhoneContextStructure;
