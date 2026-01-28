import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    background: "#FFFFFF",
    foreground: "#000000",
    text: {
      primary: "#000000",
      secondary: "#929191",
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: "#000000",
    foreground: "#FFFFFF",
    text: {
      primary: "#FFFFFF",
      secondary: "#929191",
    },
  },
};
