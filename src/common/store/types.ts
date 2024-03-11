import { IGoodsIBaskedModel } from "../types";

export interface IGeneralStoreInitProps {
  basket: IGoodsIBaskedModel[];
}

export interface IGeneralStoreProps extends IGeneralStoreInitProps {
  addBasket: (basket: IGoodsIBaskedModel) => void;
  removeBasket: (name: string) => void;
  updateCount: (name: string, counter: number) => void;
  resetBasket: () => void;
}
