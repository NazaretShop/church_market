import { FieldError, Merge } from "react-hook-form";

export interface IActiveble {
  isActive?: boolean;
}
export interface IOpenable {
  isOpen: boolean;
}
export interface IOption<T> {
  label: string;
  value: string;
  id: number;
  fullObject: T;
}

export interface IError {
  error?: TErrorForm;
}

export interface IPageProps {
  isHomePage: boolean;
}

export type TErrorForm =
  | FieldError
  | Merge<FieldError, (FieldError | undefined)[]>;

export type TDeviceType =
  | "desktop"
  | "littleDesktop"
  | "tablet"
  | "mobile"
  | "littleMobile";
