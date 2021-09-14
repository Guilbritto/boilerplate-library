import React, { useEffect, useRef, useState } from "react";

import { Container, AlertMessage } from "./InputComponent.style";
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

  return (
    <>
      <Container
        isActive={isActive}
        isEyeOn={isEyeOn && variant === "password"}
        variant={variant}
        onClick={heandleFocus}
        onBlur={handleBlur}
        error={!!error}
      >
        <input
          {...rest}
          ref={inputRef}
          value={inputText}
          onChange={(evt) => handleChange(evt)}
        />
        <label>{label}</label>

        {variant === "password" && (
          <div onClick={() => setIsEyeOn(!isEyeOn)}>
            {isEyeOn ? Eye : EyeOff}
          </div>
        )}
      </Container>
      {error && (
        <AlertMessage>
          {AlertCircle}
          {error?.message}
        </AlertMessage>
      )}
    </>
  );
};

export default InputComponent;
