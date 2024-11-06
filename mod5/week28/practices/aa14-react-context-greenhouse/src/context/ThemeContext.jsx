import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(); // create new context

export const useTheme = () => useContext(ThemeContext); // custom react hook

export default function ThemeProvider({ children }) { // context provier
  const [themeName, setThemeName] = useState("day");

  return ( // Through Provider, every component included (wrapped) in the context has access to themeName/setThemeName
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
