import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme();

theme = responsiveFontSizes(theme);

theme = {
  ...theme,
  background: {
    color: "#475e39",
  },
  text: {
    primary: {
      color: "#f7f0d7",
      font: "Junge",
    },
  },
};

export default theme;

declare module "@mui/material/styles" {
  interface Theme {
    background?: {
      color?: string;
    };
    text?: {
      primary?: {
        color?: string;
        font?: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    background?: {
      color?: string;
    };
    text?: {
      primary?: {
        color?: string;
        font?: string;
      };
    };
  }
}
