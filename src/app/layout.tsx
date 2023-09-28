import { ThemeContextProvider } from "@/context/ThemeContext";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import MyThemeProvider from "@/providers/ThemeProvider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha97 Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <MyThemeProvider>{children}</MyThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
