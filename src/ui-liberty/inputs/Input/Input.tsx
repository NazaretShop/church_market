import { renderInputError } from "@/common/helpers/renderInputError";
import { forwardRef } from "react";
import { Component, Container, Icon, Label, Message, Wrapper } from "./styles";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const {
    message,
    error,
    type = "text",
    label,
    endIcon,
    onClick,
    required,
    ...rest
  } = props;

  const onClickHandler = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required ? "*" : ""}
        </Label>
      )}
      <Container>
        <Component
          {...rest}
          isError={!!error}
          ref={ref}
          onClick={onClickHandler}
          type={"text"}
          aria-invalid={!!error}
          haveEndIcon={!!endIcon}
        />
        {!!endIcon && (
          <Icon type={"button"} className="end-icon" onClick={onClickHandler}>
            <img src={endIcon} alt="image_eye" />
          </Icon>
        )}
      </Container>
      {error && <Message error={error}>{renderInputError(error)}</Message>}
      {!!message &&
        !error &&
        (typeof message === "string" ? (
          <Message error={error}>{message}</Message>
        ) : (
          message
        ))}
    </Wrapper>
  );
});

Input.displayName = "Input";

export default Input;
