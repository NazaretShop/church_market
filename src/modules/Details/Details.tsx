import { IProductModel } from "@/common/types";
import { Information, Slider } from "./components";
import { Content, Description, Text, Title, Wrapper } from "./styles";

const Details = () => {
  const product = {} as IProductModel;
  return (
    <Wrapper>
      <Content>
        <Slider images={product.files || []} />
        <Information {...product} />
      </Content>
      {!!product.description && (
        <Description>
          <hr />
          <Title>Опис</Title>
          <Text>{product.description}</Text>
        </Description>
      )}
    </Wrapper>
  );
};

export default Details;
