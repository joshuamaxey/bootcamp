import { createContext } from "react";
import { useState } from "react";
import horoscopesObj from "../data/horoscopes";

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
    const [currentSign, setCurrentSign] = useState("Taurus");

    console.log(currentSign)
    console.log(horoscopesObj)

    const sign = horoscopesObj.currentSign

  return (
    <HoroscopeContext.Provider value={{ currentSign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
