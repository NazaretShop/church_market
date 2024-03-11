import { themeColors } from "./colors";
import { IConfigProps } from "./types";

export const themeConfig: IConfigProps = {
  colors: themeColors,
  text: {
    overflow: `
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
    `,
    getLineClamp: (lines = 4) =>
      `
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;
      `,
  },
  absoluteCenter: `
    opacity: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  flex: {
    center: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    row: `
      display: flex;
      align-items: center;
    `,
    column: `
      display: flex;
      flex-direction: column;
    `,
    between: `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
  },
  content: {
    mainContainerPadding: `
      padding: 0 120px 0 120px;
      @media screen and (max-width: 1920px) {
        padding: 0 6.3vw;
      }
      @media screen and (max-width: 1440px) {
        padding: 0 7vw;
      }
      @media screen and (max-width: 1280px) {
        padding: 0 40px;
      }
      @media screen and (max-width: 767px) {
        padding: 0 16px;
      }
    `,
    headerSpace: `
      padding-top: 104px;
      @media screen and (max-width: 1280px) {
        padding-top: 80px; 
      }
      @media screen and (max-width: 540px) {
        padding-top: 76px; 
      }
    `,
    mainContainerWidth: `
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
    `,
  },
};
