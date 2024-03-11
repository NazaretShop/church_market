import { useEffect, useState } from 'react';

import { TUseOnScreen } from './types';

export const useOnScreen: TUseOnScreen = (ref, rootMargin) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  });

  return isVisible;
};
