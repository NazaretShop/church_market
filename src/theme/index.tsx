import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "./config";
import { IThemeProvider } from "./types";

const Theme: FC<IThemeProvider> = (props) => {
  const { children } = props;
  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};

export default Theme;
