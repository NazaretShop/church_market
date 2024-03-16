import { useGetSingleProductQuery } from "@/common/api/general";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { Information, Slider, SliderLoader } from "./components";
import {
  Content,
  Description,
  InformationLoader,
  Text,
  TextLoader,
  Title,
  TitleLoader,
  Wrapper,
} from "./styles";

const Details = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  if (!product && !isLoading) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <Wrapper>
        <Content>
          <SliderLoader />
          <InformationLoader />
        </Content>
        <Description>
          <hr />
          <TitleLoader />
          <TextLoader />
        </Description>
      </Wrapper>
    );
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
