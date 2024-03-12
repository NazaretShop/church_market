import { useGetSingleProductQuery } from "@/common/api/general";
import { useParams } from "react-router-dom";
import { Information, Slider } from "./components";
import { Content, Description, Text, Title, Wrapper } from "./styles";

const Details = () => {
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);
  if (!product) {
    return null;
  }
  return (
    <Wrapper>
      <Content>
        <Slider images={product?.product_images || []} />
        <Information {...product} />
      </Content>
      {!!product?.product_description && (
        <Description>
          <hr />
          <Title>Опис</Title>
          <Text>{product.product_description}</Text>
        </Description>
      )}
    </Wrapper>
  );
};

export default Details;
