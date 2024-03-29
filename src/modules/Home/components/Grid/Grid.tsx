import { useGetProductsQuery } from "@/common/api/general";
import { TitleArticle } from "@/common/components/articles";
import { LoaderProductCard, ProductCard } from "@/common/components/cards";
import { Container, Wrapper } from "./styles";

const Grid = () => {
  const { data: goods, isLoading } = useGetProductsQuery({ limit: 10 });

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
    </Wrapper>
  );
};

export default Grid;
