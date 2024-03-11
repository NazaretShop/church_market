export interface ILayoutStoreInitProps {
  isDarken: boolean;
}

export interface ILayoutStoreProps extends ILayoutStoreInitProps {
  onChangeTheme: (isDarken: boolean) => void;
}
