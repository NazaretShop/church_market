import { ICategoryModel } from "@/common/types";

export interface IHeaderWrapperProps {
  isDarken: boolean;
  visible: boolean;
}

export interface IHeaderProps {
  categories: ICategoryModel[];
  isDarken: boolean;
}
