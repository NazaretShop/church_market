import { IOption } from "../types";

interface IRedoArrayInOptions<T> {
  array: T[];
  valueFieldName: keyof T;
  labelFieldName: keyof T;
  idFieldName: keyof T;
}

export const redoArrayInOptions = <T extends { [K in keyof T]: any }>({
  array,
  idFieldName,
  labelFieldName,
  valueFieldName,
}: IRedoArrayInOptions<T>): IOption<T>[] => {
  if (!array.length) {
    return [];
  }
  const result: IOption<T>[] = [];

  array.forEach((value) => {
    result.push({
      id: value[idFieldName],
      label: value[labelFieldName],
      value: value[valueFieldName],
      fullObject: value,
    });
  });

  return result;
};
