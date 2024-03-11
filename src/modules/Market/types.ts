import { IProductModel } from "@/common/types";

export interface IGoods {
  id: string;
  product: IProductModel;
}

export interface IMarketProps {
  goods: IGoods[];
}
