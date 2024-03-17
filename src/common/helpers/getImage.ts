import brokenImage from "@/assets/images/broken.webp";

export const getImage = (urls?: string[]): string => {
  return urls?.find((url) => url?.split(".").pop() !== "mp4") || brokenImage;
};
