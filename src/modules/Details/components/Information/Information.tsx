import { LINK_TEMPLATES } from "@/common/constants";
import { getImage } from "@/common/helpers";
import { useGeneralStore } from "@/common/store";
import { IProductModelSecond } from "@/common/types";
import { Button } from "@/ui-liberty/buttons";
import { useSnackbar } from "notistack";
import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
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
  id,
  product_images,
  product_description,
  product_category,
}) => {
  const addItemBasket = useGeneralStore((state) => state.addBasket);
  const basket = useGeneralStore((state) => state.basket);
  const { enqueueSnackbar } = useSnackbar();
  const push = useNavigate();

  const isAdded = !!basket.some((item) => item.name === product_name);

  const handlerAdd = (e: MouseEvent<HTMLButtonElement>) => {
    if (!isAdded) {
      e.stopPropagation();
      if (basket.length < +process.env.REACT_APP_MAX_BASKET_COUNT!) {
        addItemBasket({
          count: 1,
          id: id || "",
          name: product_name || "",
          price: +(product_price || 0),
          image: getImage(product_images),
          total: +(product_price || 0),
        });
      } else {
        enqueueSnackbar(
          `Максимальна кількість покупки товарів за один раз ${+process.env
            .REACT_APP_MAX_BASKET_COUNT!} одиниць`,
          {
            variant: "warning",
          }
        );
      }
    } else {
      push(LINK_TEMPLATES.ORDERS());
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
        <Price>{product_price} грн</Price>
      </Content>
      <BasketAction>
        <Button variant={isAdded ? "outline" : "filled"} onClick={handlerAdd}>
          {isAdded ? "В кошику" : "Додати в кошик"}
        </Button>
      </BasketAction>
      <Category>
        <b>Категорія: </b>
        <span>{product_category}</span>
      </Category>
    </Wrapper>
  );
};

export default Information;
