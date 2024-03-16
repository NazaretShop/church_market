import { IBannerModel } from "@/common/types";
import { FC } from "react";
import {
  Background,
  Block,
  Container,
  Description,
  Title,
  Wrapper,
} from "./styles";

const Item: FC<IBannerModel> = ({
  banner_description,
  banner_image,
  banner_name,
}) => (
  <Wrapper>
    <Background src={banner_image.guid} alt={banner_name} />
    <Container>
      <Block>
        <Title>{banner_name}</Title>
        <Description>{banner_description}</Description>
      </Block>
    </Container>
  </Wrapper>
);

export default Item;
