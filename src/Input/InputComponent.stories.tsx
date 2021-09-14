import React from "react";
import InputComponent from "./InputComponent";

export default {
  title: "InputComponent",
};

export const Active = () => {
  return <InputComponent label="Usuário" value="Text" />;
};

export const Text = () => {
  return <InputComponent label="Usuário" />;
};

export const Password = () => {
  return <InputComponent label="Usuário" variant="password" />;
};
