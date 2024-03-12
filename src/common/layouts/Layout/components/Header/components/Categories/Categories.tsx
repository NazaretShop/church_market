import { LINK_TEMPLATES } from "@/common/constants";
import { useMarketStore } from "@/modules/Market/store";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Item, Wrapper } from "./styles";
import { ICategoriesProps } from "./types";

const Categories: FC<ICategoriesProps> = ({
  isDarken,
  isOpen,
  onClose,
  categories,
}) => {
  const push = useNavigate();

  const currentCategory = useMarketStore.useCategory();
  const search = useMarketStore.useSearch();
  const page = useMarketStore.usePage();

  const handlerRedirect = (isActive: boolean, category: string) => {
    if (!isActive) {
      push(
        LINK_TEMPLATES.PRODUCTS({
          category,
          search,
        })
      );
    } else {
      push(LINK_TEMPLATES.PRODUCTS({ page, search }));
    }
    onClose();
  };

  const renderItems = () => {
    return categories?.map((category) => {
      const isActive = currentCategory === category.title.rendered;
      return (
        <Item
          isDarken={isDarken}
          key={category.id}
          isActive={isActive}
          onClick={() => handlerRedirect(isActive, category.title.rendered)}
        >
          <span>{category.title.rendered}</span>
        </Item>
      );
    });
  };

  return (
    <Wrapper isOpen={isOpen}>
      <Grid isDarken={isDarken}>
        <Item
          isDarken={isDarken}
          isActive={false}
          onClick={() => handlerRedirect(true, "")}
        >
          <span>Всі категорії</span>
        </Item>
        {renderItems()}
      </Grid>
    </Wrapper>
  );
};

export default Categories;
