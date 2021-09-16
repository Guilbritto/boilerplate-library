import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      neutral: {
        white: string;
        light: string;
        dark: string;
        soft: string;
        medium: string; 
      }
      suport: {
        success: string;
        alert: string;
        error: string;
      }
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string,
    }
    borderRadius: string; 

  }
}