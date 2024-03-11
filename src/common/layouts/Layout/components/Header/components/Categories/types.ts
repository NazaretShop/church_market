import { ICategoryModel, IOpenable } from "@/common/types";

export interface ICategoriesProps extends IOpenable {
  isDarken: boolean;
  onClose: () => void;
  categories: ICategoryModel[];
}

export interface IColorProps {
  isDarken: boolean;
}
