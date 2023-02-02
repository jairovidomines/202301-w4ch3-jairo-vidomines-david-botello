import PhoneContext from "../../store/context/PhoneContext/PhoneContext";
import { useContext } from "react";

const Display = (): JSX.Element => {
  const { phoneNumber } = useContext(PhoneContext);

  return <span>{phoneNumber}</span>;
};

export default Display;
