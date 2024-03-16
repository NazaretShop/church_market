import { axiosBaseInstance } from "@/common/api";
import { IOrderModel } from "@/common/types";
import { encode as base64_encode } from "base-64";
import { generateOrderHTML } from "../helpers";

export const createOrder = async (orderData: IOrderModel) => {
  let encoded = base64_encode(
    `${process.env.REACT_APP_CREATOR_LOGIN}:${process.env.REACT_APP_CREATOR_PASS}`
  );

  await axiosBaseInstance.post(
    "/my_order",
    {
      title: `${orderData.firstName} ${orderData.lastName}`,
      status: "publish",
      content: generateOrderHTML(orderData),
    },
    {
      headers: {
        Authorization: "Basic " + encoded,
      },
    }
  );
};
