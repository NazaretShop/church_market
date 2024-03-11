import { ISliderModel } from "@/common/types";
import { FC } from "react";
import { Background, Block, Description, Title, Wrapper } from "./styles";

const Item: FC<ISliderModel> = ({ description, id, image, title }) => {
  return (
    <Wrapper>
      <Background src={image} alt={title} />
      <Block>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Block>
    </Wrapper>
  );
};

export default Item;
