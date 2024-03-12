import { LINK_TEMPLATES } from "@/common/constants";
import { getImage } from "@/common/helpers";
import getReducedNumber from "@/common/helpers/getReducedNumber";
import { useGeneralStore } from "@/common/store";
import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Content,
  Panel,
  Preview,
  Price,
  Title,
  Wrapper,
} from "./styles";
import { IProductCardProps } from "./types";

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const push = useNavigate();

  // const addItemBasket = useGeneralStore((state) => state.addBasket);
  const basket = useGeneralStore((state) => state.basket);
  const isAdded = !!basket.some((item) => item.id === product.id);

  const handlerAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isAdded) {
      if (basket.length < +process.env.NEXT_PUBLIC_MAX_BASKET_COUNT!) {
        // addItemBasket({
        //   count: 1,
        //   id: product.id,
        //   name: product.,
        //   price: product.price,
        //   image: product.files[0].url,
        //   total: product.price,
        // });
      } else {
        alert(
          `Максимальна кількість покупки товарів за один раз ${+process.env
            .NEXT_PUBLIC_MAX_BASKET_COUNT!} одиниць`
        );
      }
    }
  };

  return (
    <Wrapper
      onClick={() => push(LINK_TEMPLATES.PRODUCT_DETAILS({ id: product.id }))}
    >
      <Content>
        <Preview>
          <img
            src={getImage(product?.product_images)}
            alt={product?.product_name}
          />
        </Preview>
        <Panel>
          <Title>{product?.product_name}</Title>
          <Price>{getReducedNumber(product?.product_price)} грн</Price>
          <Button isFilled={!isAdded} onClick={handlerAdd}>
            {isAdded ? "В кошику" : "Купити"}
          </Button>
        </Panel>
      </Content>
    </Wrapper>
  );
};

export default ProductCard;
