import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      secondaryInverted: string;

      space: string;

      background: string;
      secondaryBackground: string;

      inactive: string;

      skeleton1: string;
      skeleton2: string;

      text: {
        primary: string;
        primaryInverted: string;
        secondary: string;
      };

      error: string;
      yellow: string;
      yellowMedium: string;
      yellowDark: string;
      green: string;
      greenDark: string;
      red: string;
      redConquer: string;
      mercury: string;
      black: string;
      white: string;
      gray: string;
      grayDark: string;
    };
    font: {
      family: {
        Rubik: string;
      };
      weight: {
        normal: string;
        regular: string;
        semibold: string;
        bold: string;
      };
    };
  }
}
