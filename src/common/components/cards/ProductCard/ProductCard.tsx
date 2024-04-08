import { LINK_TEMPLATES } from "@/common/constants";
import { getImage } from "@/common/helpers";
import { useGeneralStore } from "@/common/store";
import { useSnackbar } from "notistack";
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
  const { enqueueSnackbar } = useSnackbar();
  const addItemBasket = useGeneralStore((state) => state.addBasket);
  const basket = useGeneralStore((state) => state.basket);
  const isAdded = !!basket.some((item) => item.id === product.id);

  const handlerAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!isAdded) {
      if (basket.length < +process.env.REACT_APP_MAX_BASKET_COUNT!) {
        addItemBasket({
          count: 1,
          id: product.id,
          name: product.product_name,
          price: +product.product_price,
          image: getImage(product?.product_images),
          total: +product.product_price,
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
    }
  };

  return (
    <Wrapper
      onClick={() => {
        push(LINK_TEMPLATES.PRODUCT_DETAILS({ id: product.id }));
        window.scrollTo(0, 0);
      }}
    >
      <Content>
        <Preview>
          <img
            src={getImage(product.product_images)}
            alt={product?.product_name}
          />
        </Preview>
        <Panel>
          <Title title={product?.product_name}>{product?.product_name}</Title>
          <Price>{product?.product_price} грн</Price>
          <Button isFilled={!isAdded} onClick={handlerAdd}>
            {isAdded ? "В кошику" : "Купити"}
          </Button>
        </Panel>
      </Content>
    </Wrapper>
  );
};

export default ProductCard;
