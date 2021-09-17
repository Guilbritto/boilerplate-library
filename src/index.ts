import Input from "./Input/InputComponent";
import Button from "./Button/ButtonComponent";
import {defaultTheme} from "./styles/defaultTheme";
import { CustomThemeProvider, useTheme } from "./hooks/ThemeContext";
import { createTheme } from "@lib/createTheme";

export {
  Input,
  Button,
  defaultTheme,
  CustomThemeProvider,
  useTheme,
  createTheme,
}