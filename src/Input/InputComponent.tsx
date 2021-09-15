import React, { useEffect, useRef, useState } from "react";

import {
  Container,
  AlertMessage,
  Input,
  Label,
  Svg,
} from "./InputComponent.style";
import { InputProps } from "./InputComponent.types";

import { Eye } from "../assets/Eye";
import { EyeOff } from "../assets/EyeOff";
import { AlertCircle } from "../assets/AlertCircle";

const InputComponent = ({
  value,
  variant = "text",
  label,
  error,
  type = "text",
  onChange,
  ...rest
}: InputProps) => {
  const [isActive, setIsActive] = useState(false);
  const [inputText, setInputText] = useState(value || "");
  const [isEyeOn, setIsEyeOn] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputText) {
      setIsActive(true);
    }
  });

  useEffect(() => {
    if (!!error) {
      setIsActive(true);
    }
  }, [error, inputRef]);

  const heandleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (inputText.length === 0) {
      setIsActive(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    onChange(e);
  };
  const handleEyeClick = () => {
    setIsEyeOn(!isEyeOn);
    if (isEyeOn) {
      inputRef.current?.setAttribute("type", "text");
    } else {
      inputRef.current?.setAttribute("type", "password");
    }
  };

  return (
    <>
      <Container
        variant={variant}
        onClick={heandleFocus}
        onBlur={handleBlur}
        data-testid="input-container"
      >
        <Input
          {...rest}
          ref={inputRef}
          type={variant === "password" ? "password" : "text"}
          value={inputText}
          isActive={isActive}
          isEyeOn={isEyeOn && variant === "password"}
          error={!!error}
          onChange={(evt) => handleChange(evt)}
          data-testid="input"
        />
        <Label isActive={isActive} error={!!error} data-testid="input-label">
          {label}
        </Label>

        {variant === "password" && (
          <Svg onClick={() => handleEyeClick()} data-testid="input-eye">
            {isEyeOn ? Eye : EyeOff}
          </Svg>
        )}
      </Container>
      {error && (
        <AlertMessage data-testid="input-errorMessage">
          {AlertCircle}
          {error?.message}
        </AlertMessage>
      )}
    </>
  );
};

export default InputComponent;
