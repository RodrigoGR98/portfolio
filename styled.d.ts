import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      foreground: string;
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
