import imageFrame from "@/assets/images/frame.png";
import { LINK_TEMPLATES } from "@/common/constants";
import { Button } from "@/ui-liberty/buttons";
import { useNavigate } from "react-router-dom";
import { Decoration, NotFoundContainer, Title, Wrapper } from "./styles";

const NotFound = () => {
  const push = useNavigate();

  return (
    <Wrapper>
      <NotFoundContainer>
        <Decoration orientation="top" src={imageFrame} alt="" />
        <Title>404</Title>
        Сторінку не знайдено
        <Button onClick={() => push(LINK_TEMPLATES.PRODUCTS({}))}>
          Повернутись до подуктів
        </Button>
        <Decoration orientation="bottom" src={imageFrame} alt="" />
      </NotFoundContainer>
    </Wrapper>
  );
};

export default NotFound;
