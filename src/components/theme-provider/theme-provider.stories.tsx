import ThemeProvider from ".";
import { ThemeProviderProps } from ".";

export default {
  title: "Theme Provider",
  component: ThemeProvider,
};

export const BasicTheme = {
  args: {
    primaryColor: "#000",
  },
} as { args: ThemeProviderProps };