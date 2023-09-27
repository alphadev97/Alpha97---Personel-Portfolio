"use client";

import { ReactNode, createContext, useState } from "react";

interface MyComponentProps {
  children: ReactNode;
}

interface ThemeProviderProps {
  children: ReactNode;
  value: ThemeContextProps;
}
interface ThemeContextProps {
  theme: string;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");

  return value || "light";
};

export const ThemeContextProvider = ({
  children,
  value,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
