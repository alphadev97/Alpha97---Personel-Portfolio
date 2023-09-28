"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { ReactNode, useContext, useEffect, useState } from "react";

interface MyThemeProviderProps {
  children: ReactNode;
}

const MyThemeProvider = ({ children }: MyThemeProviderProps) => {
  const { theme } = useContext(ThemeContext)!;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default MyThemeProvider;
