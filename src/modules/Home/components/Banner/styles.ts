import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100svh;
  min-height: 400px;
  max-height: 1080px;
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
    background: rgba(255, 196, 0, 0.6);
  }
`;

export const FixedLoader = styled.div`
  ${({ theme }) => theme.flex.column};
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 16px;
  overflow: auto;
  z-index: 1000;
  background-color: #fff;
`;

export const Block = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: auto;
  width: 100%;
  max-width: 500px;
`;

export const Loader = styled.div`
  display: block;
  --height-of-loader: 4px;
  --loader-color: #e2a600;
  width: 130px;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
  }

  @keyframes moving {
    50% {
      width: 100%;
    }

    100% {
      width: 0;
      right: 0;
      left: unset;
    }
  }
`;

export const ImageLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
