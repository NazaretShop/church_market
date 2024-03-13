import { LINK_TEMPLATES } from "@/common/constants";
import { useGeneralStore } from "@/common/store";
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createOrder } from "./api";
import { Alert, Form, GoodsItem, TotalPrice } from "./components";
import {
  ContainerForm,
  Flex,
  Information,
  List,
  Title,
  Wrapper,
} from "./styles";
import { IOrderFormField } from "./types";

const Orders = () => {
  const push = useNavigate();

  const basket = useGeneralStore((state) => state.basket);
  const [isOpen, setIsOpen] = useState(false);
  const methods = useForm<IOrderFormField>();
  const { handleSubmit, reset } = methods;

  const totalPrice = useMemo(() => {
    return basket.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.total,
      0
    );
  }, [JSON.stringify(basket)]);

  const countGoods = useMemo(() => {
    return basket.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );
  }, [JSON.stringify(basket)]);

  const onSubmit = async (data: IOrderFormField) => {
    try {
      await createOrder({
        ...data,
        goods: basket,
        price: totalPrice,
        count: countGoods,
        createdAt: Date.now(),
        status: "new",
      });
      reset();
      setIsOpen(true);
    } catch (error) {}
  };

  const renderGoods = () => {
    return basket?.map((item, id) => <GoodsItem {...item} key={id} />);
  };

  useEffect(() => {
    if (!basket.length && !isOpen) {
      push(LINK_TEMPLATES.PRODUCTS({}));
    }
  }, [basket.length, isOpen]);

  return (
    <FormProvider {...methods}>
      <Alert onClose={() => setIsOpen(false)} opened={isOpen} />
      <Wrapper>
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <Title>Оформлення замовлення</Title>
          <Flex>
            <Information>
              <Form />
              <Title>Замовлення</Title>
              <List>{renderGoods()}</List>
            </Information>
            <TotalPrice countGoods={countGoods} totalPrice={totalPrice} />
          </Flex>
        </ContainerForm>
      </Wrapper>
    </FormProvider>
  );
};

export default Orders;
