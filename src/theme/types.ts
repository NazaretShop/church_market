import { PropsWithChildren } from "react";

export interface IColorsProps {
  root: string;
  secondary: string;
  primary: string;
  button: string;
  regular: string;
  header: string;
  buttonOutline: string;
}

export interface IConfigProps {
  text: {
    overflow: string;
    getLineClamp: (lines: number) => string;
  };
  absoluteCenter: string;
  flex: {
    center: string;
    row: string;
    column: string;
    between: string;
  };
  colors: IColorsProps;
  content: {
    mainContainerPadding: string;
    headerSpace: string;
    mainContainerWidth: string;
  };
  animation: {
    shine: string;
  };
}

export interface IThemeProvider extends PropsWithChildren {}
