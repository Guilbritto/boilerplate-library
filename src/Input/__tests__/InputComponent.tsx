import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { Container } from "../InputComponent.style";
import Input from "../InputComponent";

jest.mock("../../assets/AlertCircle", () => {
  return () => <></>;
});

describe("Input Component", () => {
  it("Should be able to match a snapshot with false parameter", () => {
    const { container } = render(
      <Container
        error={false}
        isActive={false}
        isEyeOn={false}
        variant="text"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should be able to match a snapshot with true parameter", () => {
    const { container } = render(
      <Container
        error={true}
        isActive={true}
        isEyeOn={true}
        variant="password"
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should be able to check the error message", () => {
    const errorMessage = "Error Message";
    const { getByTestId } = render(
      <Input
        error={{
          message: errorMessage,
        }}
        label="Label"
        variant="password"
      />
    );
    const alertMessage = getByTestId("input-errorMessage");
    expect(alertMessage.innerHTML).toBe(errorMessage);
  });

  it("Should be not able to check the error message when message is diferent", () => {
    const errorMessage = "Error Message";
    const { getByTestId } = render(
      <Input
        error={{
          message: errorMessage,
        }}
        label="Label"
        variant="password"
      />
    );
    const alertMessage = getByTestId("input-errorMessage");
    expect(alertMessage.innerHTML).toBe("Diferent Message");
  });
});
