import { forwardRef } from "react";
import { Component, Container, Wrapper } from "./styles";
import { IInputProps } from "./types";

const SimpleInput = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { error = "text", type, ...rest } = props;

  return (
    <Wrapper className="simple-input">
      <Container>
        <Component
          {...rest}
          ref={ref}
          type={type}
          isError={Boolean(error)}
          aria-invalid={!!error}
        />
      </Container>
    </Wrapper>
  );
});

SimpleInput.displayName = "SimpleInput";

export default SimpleInput;
