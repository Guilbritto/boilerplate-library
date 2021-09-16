import React from "react";
import ButtonComponent from "./ButtonComponent";

export default {
  title: "Button",
  component: ButtonComponent,

  argTypes: {
    icon: {
      options: ["arrowRight", "eye"],
      control: {
        type: "select",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
};

export const Default = (args) => <ButtonComponent {...args} />;
