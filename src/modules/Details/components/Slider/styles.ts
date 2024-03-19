import { IActiveble } from "@/common/types";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  max-width: 500px;
  height: 100%;

  gap: 16px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    margin: auto 0;
    background: #ffffff;
    ${({ theme }) => theme.flex.center};
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    background: rgba(255, 234, 4, 0.8);
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: rgba(0, 0, 0, 0.8);
    &::before,
    &::after {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 1280px) {
    max-width: 400px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 300px;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: fit-content;
    .swiper-slide img {
      max-width: 500px;
      max-height: 80svh;
    }
  }
`;

export const List = styled.div`
  ${({ theme }) => theme.flex.row};
  overflow: hidden;
  overflow-x: auto;
  gap: 16px;
  width: 100%;
  height: 180px;
  @media screen and (max-width: 767px) {
    height: 120px;
  }
`;

export const Button = styled.button<IActiveble>`
  height: 100%;
  aspect-ratio: 2 / 3;
  ${({ isActive }) =>
    isActive
      ? css`
          border: 1px solid #2e2d2d;
        `
      : css`
          border: 1px solid transparent;
        `}
  @media screen and (max-width: 767px) {
    aspect-ratio: 5 / 8;
  }
`;

export const ImageItem = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const ImageItemLoader = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f0f0f0ff;
  ${({ theme }) => theme.animation.shine};
`;

export const VideoItem = styled.video`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const PreviewImage = styled.img`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

export const PlayerSlide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 40px;
`;

export const PreviewImageLoader = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0ff;
  ${({ theme }) => theme.animation.shine};
  @media screen and (max-width: 767px) {
    height: 400px;
  }
`;
