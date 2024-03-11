import imageDone from "@/assets/icons/done.svg";
import { LINK_TEMPLATES } from "@/common/constants";
import { useGeneralStore } from "@/common/store";
import { AnimatedModal } from "@/common/windows";
import { Button } from "@/ui-liberty/buttons";

import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DoneIcon, Message, Wrapper } from "./styles";
import { IAlertProps } from "./types";
const Alert: FC<IAlertProps> = ({ onClose, opened }) => {
  const resetBasket = useGeneralStore((state) => state.resetBasket);
  const push = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (opened && !pathname.includes("orders")) {
      resetBasket();
    }
  }, [pathname, opened]);

  return (
    <AnimatedModal
      onClose={() => {
        resetBasket();
        onClose();
      }}
      opened={opened}
    >
      <Wrapper>
        <DoneIcon src={imageDone} alt="done" />
        <Message>
          Дякуємо за замовлення, воно взяте в обробку, незабаром з вами
          зв'яжеться наш менеджер, очікуйте.
        </Message>
        <Button
          onClick={async () => {
            await push(LINK_TEMPLATES.PRODUCTS({}));
            resetBasket();
          }}
        >
          Повернутись до подуктів
        </Button>
      </Wrapper>
    </AnimatedModal>
  );
};

export default Alert;
