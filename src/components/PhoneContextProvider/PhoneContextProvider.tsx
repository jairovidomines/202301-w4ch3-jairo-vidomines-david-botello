import { useState } from "react";
import PhoneContext from "../../store/context/PhoneContext/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element;
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber] = useState("");

  return (
    <PhoneContext.Provider value={{ phoneNumber }}>
      {" "}
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
