import imageLogo from "@/assets/images/logo-header.webp";
import { PhoneIcon, ShoppingCardIcon } from "@/common/components/icons";
import { LINK_TEMPLATES } from "@/common/constants";
import { useOnClickOutside } from "@/common/hooks";
import { useGeneralStore } from "@/common/store";
import { themeColors } from "@/theme/colors";
import { useSnackbar } from "notistack";
import { FC, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BurgerMenu } from "./components";
import {
  BasketBtn,
  Calls,
  Content,
  Label,
  Logo,
  LogoBtn,
  Row,
  Wrapper,
} from "./styles";
import { IHeaderProps } from "./types";

const Header: FC<IHeaderProps> = ({ categories }) => {
  const basket = useGeneralStore((state) => state.basket);
  const { pathname } = useLocation();

  const isDarken = pathname === "/";

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const refContainer = useRef<HTMLDivElement>(null);
  const push = useNavigate();

  useOnClickOutside(refContainer, () => setIsOpenCategory(false));

  const handlerRedirectToOrder = () => {
    if (basket.length) {
      enqueueSnackbar(
        "Ваш кошик пустий, додайти товар щоб зробити замовлення",
        {
          variant: "warning",
        }
      );
      push(LINK_TEMPLATES.ORDERS());
    } else {
      push(LINK_TEMPLATES.PRODUCTS({}));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= 80) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <Wrapper visible={visible} isDarken={isDarken}>
      <Content ref={refContainer}>
        <BurgerMenu
          categories={categories}
          isOpen={isOpenCategory}
          isDarken={isDarken}
          setOpen={setIsOpenCategory}
        />
        <LogoBtn onClick={() => push(LINK_TEMPLATES.HOME())}>
          <Logo src={imageLogo} alt="logo" />
        </LogoBtn>
        <Row>
          <BasketBtn onClick={() => handlerRedirectToOrder()}>
            <ShoppingCardIcon stroke={themeColors.button} />
            {!!basket.length && <Label>{basket.length}</Label>}
          </BasketBtn>
          <Calls href="tel:+380500102420">
            <PhoneIcon />
            <span>Подзвонити</span>
          </Calls>
        </Row>
      </Content>
    </Wrapper>
  );
};

export default Header;
