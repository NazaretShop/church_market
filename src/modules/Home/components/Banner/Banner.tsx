import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useOnScreen } from "@/common/hooks";
import { useLayoutStore } from "@/common/layouts/Layout/store";
import { useEffect, useRef } from "react";
import { Item } from "./components";
import { sliderData } from "./data";
import { Wrapper } from "./styles";

const Banner = () => {
  const inBannerRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(inBannerRef, "0px");
  const onChangeTheme = useLayoutStore.useOnChangeTheme();

  const renderSlide = () => {
    return sliderData.map((slide) => (
      <SwiperSlide key={slide.id}>
        <Item {...slide} />
      </SwiperSlide>
    ));
  };

  useEffect(() => {
    onChangeTheme(isOnScreen);
  }, [isOnScreen]);

  return (
    <Wrapper ref={inBannerRef}>
      <Swiper
        slidesPerView={1}
        loop={true}
        speed={1300}
        autoplay={{
          delay: 10000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {renderSlide()}
      </Swiper>
    </Wrapper>
  );
};

export default Banner;
