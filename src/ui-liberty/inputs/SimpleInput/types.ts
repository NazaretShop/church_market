import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  type?: string;
}

export interface ISimpleInputComponentProps extends IInputProps {
  isError: boolean;
}
