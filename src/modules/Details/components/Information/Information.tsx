import getReducedNumber from "@/common/helpers/getReducedNumber";
import { useGeneralStore } from "@/common/store";
import { IProductModelSecond } from "@/common/types";
import { Button } from "@/ui-liberty/buttons";
import { FC, MouseEvent } from "react";
import {
  BasketAction,
  Category,
  Content,
  Item,
  List,
  Price,
  Title,
  Wrapper,
} from "./styles";

const Information: FC<Partial<IProductModelSecond>> = ({
  product_name,
  product_price,
  product_parameters,
  product_category,
}) => {
  const addItemBasket = useGeneralStore((state) => state.addBasket);
  const basket = useGeneralStore((state) => state.basket);

  const isAdded = !!basket.some((item) => item.name === product_name);

  const handlerAdd = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isAdded) {
      e.stopPropagation();
      if (basket.length < +process.env.NEXT_PUBLIC_MAX_BASKET_COUNT!) {
        // addItemBasket({
        //   count: 1,
        //   id: id,
        //   name: title,
        //   price: price,
        //   image: files[0].url,
        //   total: price,
        // });
      } else {
        alert(
          `Максимальна кількість покупки товарів за один раз ${+process.env
            .NEXT_PUBLIC_MAX_BASKET_COUNT!} одиниць`
        );
      }
    }
  };

  const renderOptions = () => {
    return product_parameters?.map((item, id) => {
      const option = item.split("/-/");
      return (
        <Item key={id}>
          <b>{option[0]}</b>
          <span>{option[1]}</span>
        </Item>
      );
    });
  };

  return (
    <Wrapper>
      <Content>
        <div>
          <Title>{product_name}</Title>
        </div>
        <List>{renderOptions()}</List>
        <Price>{getReducedNumber(product_price)} грн</Price>
      </Content>
      <BasketAction>
        <Button variant={isAdded ? "outline" : "filled"} onClick={handlerAdd}>
          {isAdded ? "В кошику" : "Додати в кошик"}
        </Button>
      </BasketAction>
      <Category>
        <b>Категорія: </b>
        <span>{product_category?.[0]?.post_title}</span>
      </Category>
    </Wrapper>
  );
};

export default Information;
