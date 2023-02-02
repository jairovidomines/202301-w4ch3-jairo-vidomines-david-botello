import PhoneContext from "../../store/context/PhoneContext/PhoneContext";
import { useContext } from "react";

const Display = (): JSX.Element => {
  const { phoneContext: phoneNumber } = useContext(PhoneContext);

  return <span>{phoneNumber}</span>;
};

export default Display;
