declare module "notistack" {
  import { OptionsObject, SnackbarKey } from "notistack";

  export interface VariantOverrides {
    warning: false;
    cookies: true;
  }

  export const SnackbarProvider: SnackbarProvider;
  export function useSnackbar(): SnackbarProvider;
  export function closeSnackbar(key?: SnackbarKey): void;
  export function enqueueSnackbar(
    message: string,
    options?: OptionsObject
  ): SnackbarKey;
  export function useSnackbarContext(): {
    enqueueSnackbar: (message: string, options?: OptionsObject) => SnackbarKey;
    closeSnackbar: (key?: SnackbarKey) => void;
  };
  export type SnackbarOrigin = {
    horizontal?: "left" | "center" | "right";
    vertical?: "top" | "bottom";
  };
  export const SnackbarContent: (
    props: SnackbarContentProps & React.RefAttributes<HTMLDivElement>
  ) => React.ReactElement<any, any>;

  export function createSnackbarUtils(options?: OptionsObject): {
    snackbar: {
      enqueueSnackbar: (
        message: string,
        options?: OptionsObject
      ) => SnackbarKey;
      closeSnackbar: (key?: SnackbarKey) => void;
    };
  };
}
