import { createContext, useState } from "react";

export const ThemContext = createContext();

export function ThemProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme((_pre) => (_pre === "light" ? "dark" : "dark"));
  };

  <ThemContext.Provider value={{theme, toggle}}>
    {children}
  </ThemContext.Provider>
}
