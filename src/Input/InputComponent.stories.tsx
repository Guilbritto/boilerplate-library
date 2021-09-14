import React from "react";
import InputComponent from "./InputComponent";

export default {
  title: "Input",
  component: InputComponent,
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: ["text", "password"],
      control: {
        type: "radio",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "object",
      },
    },
  },
  arg: {
    variant: "text",
    label: "Label",
  },
};

export const Input = () => {
  return <InputComponent label="Usuário" />;
};
