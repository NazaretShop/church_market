import { Content, PanelLoader, PreviewLoader, Wrapper } from "./styles";

const LoaderProductCard = () => (
  <Wrapper>
    <Content>
      <PreviewLoader />
      <PanelLoader />
    </Content>
  </Wrapper>
);

export default LoaderProductCard;
