import React, { useEffect, useState } from "react";

import { Container } from "./InputComponent.style";
import { InputProps } from "./InputComponent.types";

import { Eye } from "../assets/Eye";
import { EyeOff } from "../assets/EyeOff";
import IconComponent from "../IconComponent/IconComponent";

const InputComponent = ({
  value,
  variant = "text",
  label,
  type = "text",
  ...rest
}: InputProps) => {
  const [isActive, setIsActive] = useState(false);
  const [inputText, setInputText] = useState(value || "");
  const [isEyeOn, setIsEyeOn] = useState(true);
  useEffect(() => {
    if (inputText) {
      setIsActive(true);
    }
  });

  const heandleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    if (inputText.length === 0) {
      setIsActive(false);
    }
  };

  return (
    <Container
      isActive={isActive}
      isEyeOn={isEyeOn}
      variant={variant}
      onClick={heandleFocus}
      onBlur={handleBlur}
    >
      <input
        {...rest}
        value={inputText}
        onChange={(evt) => setInputText(evt.target.value)}
      />
      <label>{label}</label>

      {variant === "password" && (
        <div onClick={() => setIsEyeOn(!isEyeOn)}>{isEyeOn ? Eye : EyeOff}</div>
      )}
    </Container>
  );
};

export default InputComponent;
