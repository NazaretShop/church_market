import brokenImage from "@/assets/images/broken.png";
import { IFileUploadedModelSecond } from "../types";

export const getImage = (urls: IFileUploadedModelSecond[]): string => {
  return (
    urls.find((url) => url?.post_mime_type?.split("/")[0] === "image")?.guid ||
    brokenImage
  );
};
