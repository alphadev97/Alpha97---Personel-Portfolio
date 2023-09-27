"use client";

import { ReactNode, createContext, useState } from "react";

interface MyComponentProps {
  children: ReactNode;
}

interface ThemeProviderProps {
  children: ReactNode;
}
interface ThemeContextProps {
  theme?: string;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
