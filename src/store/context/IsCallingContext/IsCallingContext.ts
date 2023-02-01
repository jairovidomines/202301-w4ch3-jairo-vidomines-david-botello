import { createContext } from "react";
import IsCallingContextStructure from "./types";

const IsCallingContext = createContext<IsCallingContextStructure>(
  {} as IsCallingContextStructure
);
export default IsCallingContext;
