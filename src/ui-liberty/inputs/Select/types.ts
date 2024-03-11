import { IOption } from "@/common/types";
import { UseFormRegisterReturn } from "react-hook-form";
import { IBaseSelectProps } from "../types";

export interface ISelectProps<T> extends Omit<IBaseSelectProps, "options"> {
  registerOptions?: UseFormRegisterReturn<string>;
  options: IOption<T>[];
  onChangeFullObject?: (value: T) => void;
}

export interface ISelectComponentProps<T>
  extends Omit<ISelectProps<T>, "options" | "label" | "value" | "error"> {
  isError: boolean;
}
