import { TitleArticle } from "@/common/components/articles";
import { ProductCard } from "@/common/components/cards";
import { IMarketProps } from "@/modules/Market/types";
import { FC } from "react";
import { Container, Wrapper } from "./styles";

const Grid: FC<IMarketProps> = ({ goods }) => {
  const renderGrid = () => {
    return goods?.map((item) => (
      <ProductCard product={item.product} key={item.id} />
    ));
  };

  return (
    <Wrapper>
      <TitleArticle
        title="Церковне виробництво"
        description="Для нас важливі насамперед якість і краса предметів храмового оздоблення. Вироби представлені в нашому церковному магазині:"
      />
      <Container>{renderGrid()}</Container>
    </Wrapper>
  );
};

export default Grid;
