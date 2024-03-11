import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #ffffff26;
    backdrop-filter: blur(10px);
    z-index: 10;
    box-shadow: 0px 0px 10px #000000;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    ${({ theme }) => theme.flex.center};
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-pagination-bullet {
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.4s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, 1);
  }
`;
