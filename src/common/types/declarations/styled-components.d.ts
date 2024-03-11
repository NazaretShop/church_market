import { themeConfig } from "@/theme/config";

type Theme = typeof themeConfig;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
