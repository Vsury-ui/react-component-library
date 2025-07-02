import React, { useEffect } from "react";

function ThemeProvider({
  primaryColor = document.documentElement.style.getPropertyValue(
    "--primary-color"
  ) || "#000",
  children,
}: ThemeProviderProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);

  return <>{children}</>;
}

export default ThemeProvider;

export interface ThemeProviderProps {
  primaryColor?: string;
  children?: React.ReactNode;
}