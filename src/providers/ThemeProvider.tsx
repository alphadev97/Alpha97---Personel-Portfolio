"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ReactNode, useContext } from "react";

interface MyThemeProviderProps {
  children: ReactNode;
}

const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  const { theme } = useContext(ThemeContext)!;

  return <div className={theme}>{children}</div>;
};

export default MyThemeProvider;
