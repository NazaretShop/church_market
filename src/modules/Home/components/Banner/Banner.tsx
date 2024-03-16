import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imageLogo from "@/assets/images/logo.webp";
import { useGetBannersQuery } from "@/common/api/general";
import { useOnScreen } from "@/common/hooks";
import { useLayoutStore } from "@/common/layouts/Layout/store";
import { useEffect, useRef } from "react";
import { Item } from "./components";
import { Block, FixedLoader, ImageLogo, Loader, Wrapper } from "./styles";

const Banner = () => {
  const inBannerRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(inBannerRef, "0px");
  const onChangeTheme = useLayoutStore.useOnChangeTheme();
  const { data: banners, isLoading } = useGetBannersQuery();

  const renderSlide = () => {
    return banners?.map((slide) => (
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
      {isLoading ? (
        <FixedLoader>
          <Block>
            <ImageLogo src={imageLogo} alt="logo" />
            <Loader />
          </Block>
        </FixedLoader>
      ) : (
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={600}
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
      )}
    </Wrapper>
  );
};

export default Banner;
