import { axiosBaseInstance } from "@/common/api";
import { IOrderModel } from "@/common/types";

export const createOrder = async (orderData: IOrderModel) => {
  // const ordersCollectionRef = collection(firestore, "order");
  // await addDoc(ordersCollectionRef, orderData);
  const res = await axiosBaseInstance.post("/my_order", {
    order: orderData.firstName,
  });
  console.log("res :", res);
};
