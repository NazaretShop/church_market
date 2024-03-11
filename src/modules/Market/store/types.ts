export interface IInitialMarketStoreProps {
  search: string;
  page: number;
  limit: number;
  category: string;
  minPrice: number;
  maxPrice: number;
  isInit: boolean;
}

export interface IMarketStoreProps extends IInitialMarketStoreProps {
  onChangeFilterFieldHandler: <K extends keyof IInitialMarketStoreProps>(
    value: IInitialMarketStoreProps[K],
    name: K
  ) => void;
}
