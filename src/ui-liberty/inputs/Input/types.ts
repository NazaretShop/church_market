import React, { ReactNode } from "react";
import { IBaseInputProps } from "../types";

export interface IInputProps extends IBaseInputProps {
  message?: string | ReactNode;
  label?: string;
  type?: "text" | "number" | "password" | "email";
  endIcon?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  id?: string;
}

export interface IInputComponentProps extends Omit<IInputProps, "error"> {
  haveEndIcon: boolean;
  isError: boolean;
}
