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

export const ThemeContextProvider = ({
  children,
  value,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
