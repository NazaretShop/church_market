import imageFrame from "@/assets/images/frame.png";
import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { useNavigate } from "react-router-dom";
import { Decoration, NotFoundContainer } from "./styles";

const NotFound = () => {
  const push = useNavigate();

  return (
    <NotFoundContainer>
      <Decoration orientation="top" src={imageFrame} alt="" />
      404 Сторінку не знайдено
      <Button onClick={() => push(LINK_TEMPLATES.PRODUCTS({}))}>
        Повернутись до подуктів
      </Button>
      <Decoration orientation="bottom" src={imageFrame} alt="" />
    </NotFoundContainer>
  );
};

export default NotFound;
