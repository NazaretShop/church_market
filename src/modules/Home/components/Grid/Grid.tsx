import { useGetProductsQuery } from "@/common/api/general";
import { TitleArticle } from "@/common/components/articles";
import { LoaderProductCard, ProductCard } from "@/common/components/cards";
import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { useNavigate } from "react-router-dom";
import { ActionContainer, Container, Wrapper } from "./styles";

const Grid = () => {
  const { data: goods, isLoading } = useGetProductsQuery({ limit: 10 });
  const push = useNavigate();
  const renderGrid = () => {
    return goods?.items?.map((item) => (
      <ProductCard product={item} key={item.id} />
    ));
  };

  if (!goods?.items?.length && !isLoading) {
    return null;
  }

  return (
    <Wrapper>
      <TitleArticle
        title="Церковне виробництво"
        description="Для нас важливі насамперед якість і краса предметів храмового оздоблення. Вироби представлені в нашому церковному магазині:"
      />
      <Container>
        {isLoading
          ? [...Array(10)].map((_, i) => <LoaderProductCard key={i} />)
          : renderGrid()}
      </Container>
      <ActionContainer>
        <Button
          onClick={() => {
            push(LINK_TEMPLATES.PRODUCTS({}));
            window.scrollTo(0, 0);
          }}
        >
          Показати більше
        </Button>
      </ActionContainer>
    </Wrapper>
  );
};

export default Grid;
