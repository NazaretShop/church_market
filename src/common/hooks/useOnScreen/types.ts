import { RefObject } from 'react';

export type TUseOnScreen = (
  ref: RefObject<HTMLDivElement>,
  rootMargin: string
) => boolean;
