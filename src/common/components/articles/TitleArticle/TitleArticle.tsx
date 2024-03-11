import { FC } from "react";
import { Description, Flex, Line, Title, Wrapper } from "./styles";
import { ITitleArticleProps } from "./types";

const TitleArticle: FC<ITitleArticleProps> = ({ description, title }) => {
  return (
    <Wrapper>
      <Flex>
        <Title>{title}</Title>
        <Line />
      </Flex>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default TitleArticle;
