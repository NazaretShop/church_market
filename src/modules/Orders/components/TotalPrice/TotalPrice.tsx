import imageFrame from "@/assets/images/frame.webp";
import { Button } from "@/ui-liberty/buttons";
import { FC } from "react";
import { Decoration, Line, Row, Sticky, Title, Wrapper } from "./styles";
import { ITotalPriceProps } from "./types";

const TotalPrice: FC<ITotalPriceProps> = ({ countGoods, totalPrice }) => (
  <Sticky>
    <Wrapper>
      <Decoration orientation="top" src={imageFrame} alt="" />
      <Title>Разом</Title>
      <Line />
      <Row>
        <span> {countGoods} товари на суму</span>
        <span>{totalPrice}грн</span>
      </Row>
      <Row>
        <span>
          Вартість <br /> доставки
        </span>
        <b>
          за тарифами <br /> перевізника
        </b>
      </Row>
      <Row>
        <div>До сплати</div>
        <h3>{totalPrice}грн</h3>
      </Row>
      <Button type="submit">Замовлення підтверджую</Button>
      <Decoration orientation="bottom" src={imageFrame} alt="" />
    </Wrapper>
  </Sticky>
);

export default TotalPrice;
