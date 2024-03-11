import { HTMLAttributes, PropsWithChildren } from "react";

export interface IButtonVariant {
  variant?: "outline" | "filled";
}

export interface IButtonProps
  extends PropsWithChildren,
    IButtonVariant,
    HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
}
