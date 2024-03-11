import getReducedNumber from "@/common/helpers/getReducedNumber";
import { useGeneralStore } from "@/common/store";
import { IProductModel } from "@/common/types";
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

const Information: FC<IProductModel> = ({
  parameters,
  title,
  category,
  id,
  files,
  price,
}) => {
  const addItemBasket = useGeneralStore((state) => state.addBasket);
  const basket = useGeneralStore((state) => state.basket);

  const isAdded = !!basket.some((item) => item.name === title);

  const handlerAdd = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isAdded) {
      e.stopPropagation();
      if (basket.length < +process.env.NEXT_PUBLIC_MAX_BASKET_COUNT!) {
        addItemBasket({
          count: 1,
          id: id,
          name: title,
          price: price,
          image: files[0].url,
          total: price,
        });
      } else {
        alert(
          `Максимальна кількість покупки товарів за один раз ${+process.env
            .NEXT_PUBLIC_MAX_BASKET_COUNT!} одиниць`
        );
      }
    }
  };

  const renderOptions = () => {
    return parameters?.map((option, id) => (
      <Item key={id}>
        <b>{option.name}</b>
        <span>{option.value}</span>
      </Item>
    ));
  };

  return (
    <Wrapper>
      <Content>
        <div>
          <Title>{title}</Title>
        </div>
        <List>{renderOptions()}</List>
        <Price>{getReducedNumber(price)} грн</Price>
      </Content>
      <BasketAction>
        <Button variant={isAdded ? "outline" : "filled"} onClick={handlerAdd}>
          {isAdded ? "В кошику" : "Додати в кошик"}
        </Button>
      </BasketAction>
      <Category>
        <b>Категорія: </b>
        <span>{category}</span>
      </Category>
    </Wrapper>
  );
};

export default Information;
