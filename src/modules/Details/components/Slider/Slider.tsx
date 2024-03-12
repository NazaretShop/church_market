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
      const isImage = slide?.post_mime_type?.split("/")[0] === "image";
      return (
        <SwiperSlide key={slide.ID}>
          {!isImage ? (
            <VideoPlayer link={slide.guid} />
          ) : (
            <PreviewImage src={slide.guid} alt="preview" />
          )}
        </SwiperSlide>
      );
    });
  };

  const renderImages = () => {
    return images.map((slide, id) => {
      const isImage = slide?.post_mime_type?.split("/")[0] === "image";

      return (
        <Button
          type="button"
          isActive={activeSlide === id}
          key={slide.ID}
          onClick={() => swiperRef.current?.swiper.slideTo(id)}
        >
          {isImage ? (
            <ImageItem src={slide.guid} alt="preview" />
          ) : (
            <VideoItem src={slide.guid} />
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
