import { createContext } from "react";

export const themes = {
  light: "light",
  dark: "dark",
};

export const ThemeContext = createContext({
  theme: themes.dark, // valeur par défaut
  toggleTheme: () => {},
});
