import brokenImage from "@/assets/images/broken.png";
import { IFileUploadedModel } from "../types";

export const getImage = (urls: IFileUploadedModel[]): string => {
  return (
    urls.find((url) => url.url.split(".").pop() !== "mp4")?.url || brokenImage
  );
};
