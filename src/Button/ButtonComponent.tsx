import React from "react";
import { Container } from "./ButtonComponent.styles";
import { ButtonProps } from "./ButtonComponent.types";
import { ArrowRight } from "@svg/ArrowRight";
import { withTheme } from "styled-components";

const ButtonComponent = ({ icon, iconSide, label }: ButtonProps) => {
  const ButtonIcons = {
    arrowRight: ArrowRight,
  };

  return (
    <Container>
      {icon && iconSide === "left" && ButtonIcons[icon]}
      {label}
      {icon && iconSide === "right" && ButtonIcons[icon]}
    </Container>
  );
};

export default withTheme(ButtonComponent);
