import { Dispatch } from "react";

interface IsCallingContextStructure {
  isCalling: boolean;
  setIsCalling: Dispatch<React.SetStateAction<boolean>>;
}

export default IsCallingContextStructure;
