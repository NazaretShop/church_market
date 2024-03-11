import { ICategoryModelSecond, IOpenable } from "@/common/types";

export interface ICategoriesProps extends IOpenable {
  isDarken: boolean;
  onClose: () => void;
  categories: ICategoryModelSecond[];
}

export interface IColorProps {
  isDarken: boolean;
}
