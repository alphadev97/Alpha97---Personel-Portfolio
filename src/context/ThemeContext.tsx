"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}
interface ThemeContextProps {
  theme?: string;
  toggle?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    const value = getFromLocalStorage();
    return value || "light";
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
