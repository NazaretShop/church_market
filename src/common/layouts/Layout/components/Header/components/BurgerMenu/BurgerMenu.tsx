import { LINK_TEMPLATES } from "@/common/constants";
import { useMarketStore } from "@/modules/Market/store";
import { MobileOff } from "@/utils";
import { FC, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Categories from "../Categories/Categories";
import {
  Burger,
  Button,
  Container,
  Item,
  List,
  Menu,
  Title,
  Wrapper,
} from "./styles";
import { IBurgerMenuProps } from "./types";

const BurgerMenu: FC<IBurgerMenuProps> = (props) => {
  const { categories, isOpen, setOpen, isDarken } = props;
  const category = useMarketStore.useCategory();

  const search = useMarketStore.useSearch();
  const page = useMarketStore.usePage();

  const push = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

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
    setOpen(false);
  };

  const renderNavigation = () => {
    return categories.map((item) => {
      const isActive = category === item.title.rendered;
      return (
        <Item
          key={item.id}
          isDarken={isDarken}
          isActive={isActive}
          onClick={() => handlerRedirect(isActive, item.id)}
        >
          {item.title.rendered}
        </Item>
      );
    });
  };

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen, isMobile]);

  return (
    <Wrapper>
      <Burger onClick={() => setOpen((prev) => !prev)}>
        <Button type="button" isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Button>
        <Title>Категорії</Title>
      </Burger>
      <MobileOff>
        <Categories
          categories={categories}
          isDarken={isDarken}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      </MobileOff>
      <Menu isOpen={isOpen} isDarken={isDarken}>
        <Container>
          <List>
            <Item
              isDarken={isDarken}
              isActive={false}
              onClick={() => handlerRedirect(true, "")}
            >
              Всі категорії
            </Item>
            {renderNavigation()}
          </List>
        </Container>
      </Menu>
    </Wrapper>
  );
};

export default BurgerMenu;
