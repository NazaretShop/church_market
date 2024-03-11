import { forwardRef } from "react";
import { Component } from "./styles";
import { IButtonProps } from "./types";

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant = "filled", type = "button", ...rest }, ref) => (
    <Component ref={ref} type={type} variant={variant} {...rest}>
      {children}
    </Component>
  )
);

Button.displayName = "Button";
export default Button;
