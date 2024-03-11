import { ICategoryModelSecond, IOpenable } from "@/common/types";
import { Dispatch, SetStateAction } from "react";

export interface IDarkenProps {
  isDarken: boolean;
}

export interface IBurgerMenuProps extends IOpenable, IDarkenProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  categories: ICategoryModelSecond[];
}
