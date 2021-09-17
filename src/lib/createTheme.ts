import { defaultTheme } from "../styles/defaultTheme";

export const createTheme = (theme: typeof defaultTheme) => {
  return {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
    fontSizes: {
      ...defaultTheme.fontSizes,
      ...theme.fontSizes,
    },
  } as typeof defaultTheme;
}