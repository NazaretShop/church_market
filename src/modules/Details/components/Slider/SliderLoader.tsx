import { ImageItemLoader, List, PreviewImageLoader, Wrapper } from "./styles";

const SliderLoader = () => {
  const renderImages = () => {
    return [...Array(4)].map((_, id) => <ImageItemLoader key={id} />);
  };

  return (
    <Wrapper>
      <PreviewImageLoader />
      <List>{renderImages()}</List>
    </Wrapper>
  );
};

export default SliderLoader;
