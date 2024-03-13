import getReducedNumber from "@/common/helpers/getReducedNumber";
import { TrashIcon } from "@/common/icons";
import { useGeneralStore } from "@/common/store";
import { IGoodsIBaskedModel } from "@/common/types";
import { Button } from "@/ui-liberty/buttons";
import { FC, useEffect, useState } from "react";
import {
  Cel,
  Container,
  Content,
  Counter,
  EventRow,
  IconButton,
  Name,
  Preview,
  PreviewContainer,
  Price,
  Result,
  Row,
  Wrapper,
} from "./styles";

const GoodsItem: FC<IGoodsIBaskedModel> = ({
  image,
  name,
  count,
  price,
  id,
}) => {
  const updateCounter = useGeneralStore((state) => state.updateCount);
  const removeBasket = useGeneralStore((state) => state.removeBasket);

  const [counter, setCounter] = useState(count);

  useEffect(() => {
    if (counter <= +process.env.REACT_APP_MAX_PRODUCT_COUNT!) {
      updateCounter(id, counter);
    } else if (counter < 1) {
      updateCounter(id, 1);
    } else {
      updateCounter(id, 50);
    }
  }, [counter, name]);

  return (
    <Wrapper>
      <Container>
        <PreviewContainer>
          <Preview src={image} alt="goods preview" width={100} height={100} />
        </PreviewContainer>
        <Content>
          <Row>
            <Name>{name}</Name>
            <IconButton type="button" onClick={() => removeBasket(id)}>
              <TrashIcon />
            </IconButton>
          </Row>
          <EventRow>
            <Cel>{getReducedNumber(price)} ₴ / шт.</Cel>

            <Counter>
              <Button
                variant="outline"
                onClick={() =>
                  setCounter((prev) => {
                    if (prev !== 1) {
                      return --prev;
                    }
                    return prev;
                  })
                }
              >
                -
              </Button>
              <input
                value={String(count)}
                type={"number"}
                min={1}
                step={1}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (!isNaN(value)) {
                    setCounter(+e.target.value);
                  } else {
                    setCounter(1);
                  }
                }}
              />
              <Button
                variant="outline"
                onClick={() => setCounter((prev) => ++prev)}
              >
                +
              </Button>
            </Counter>
            <Result>
              <Price>{getReducedNumber(+price * count)} грн</Price>
            </Result>
          </EventRow>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default GoodsItem;
