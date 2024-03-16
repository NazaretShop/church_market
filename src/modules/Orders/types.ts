import { IAreaModel, IOrderModel, IPageProps } from "@/common/types";

export interface IOrderFormField
  extends Pick<
    IOrderModel,
    | "settlement"
    | "comment"
    | "department"
    | "email"
    | "firstName"
    | "lastName"
    | "phoneNumber"
    | "region"
  > {}

export interface IOrderProps {
  areas: IAreaModel[];
}
export interface IOrderPageProps extends IPageProps, IOrderProps {}
