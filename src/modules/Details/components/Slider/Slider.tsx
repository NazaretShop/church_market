import { FC, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import VideoPlayer from "../Player/Player";
import {
  Button,
  ImageItem,
  List,
  PreviewImage,
  VideoItem,
  Wrapper,
} from "./styles";
import { ISliderImages } from "./types";

const Slider: FC<ISliderImages> = ({ images }) => {
  const [activeSlide, setActive] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);
  const renderSlide = () => {
    return images.map((slide) => {
      const isImage = slide.format !== "mp4";
      return (
        <SwiperSlide key={slide.id}>
          {!isImage ? (
            <VideoPlayer link={slide.url} />
          ) : (
            <PreviewImage src={slide.url} alt="preview" />
          )}
        </SwiperSlide>
      );
    });
  };

  const renderImages = () => {
    return images.map((slide, id) => {
      const isImage = slide.format !== "mp4";

      return (
        <Button
          type="button"
          isActive={activeSlide === id}
          key={slide.id}
          onClick={() => swiperRef.current?.swiper.slideTo(id)}
        >
          {isImage ? (
            <ImageItem src={slide.url} alt="preview" />
          ) : (
            <VideoItem src={slide.url} />
          )}
        </Button>
      );
    });
  };

  return (
    <Wrapper>
      <Swiper
        slidesPerView={1}
        onSlideChange={(swiper: any) => {
          setActive(swiper.realIndex);
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        ref={swiperRef}
        pagination={{
          clickable: true,
        }}
      >
        {renderSlide()}
      </Swiper>
      <List>{renderImages()}</List>
    </Wrapper>
  );
};

export default Slider;
