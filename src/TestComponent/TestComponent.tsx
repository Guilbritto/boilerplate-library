import React from "react";

import { TestComponentProps } from "./TestComponent.types";
import { Container } from "./TestComponent.styled";

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <Container>
    <div
      data-testid="test-component"
      className={`test-component test-component-${theme}`}
    >
      <h1 className="heading">I'm the test component</h1>
      <h2>Made with love by Harvey</h2>
    </div>
  </Container>
);

export default TestComponent;
