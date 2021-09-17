import Input from "@components/Input/InputComponent";
import Button from "@components/Button/ButtonComponent";
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
