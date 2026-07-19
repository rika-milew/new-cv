'use client';

import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

export function useSectionReveal(): [RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isRevealed) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return (): void => {
      observer.disconnect();
    };
  }, [isRevealed]);

  return [ref, isRevealed];
}
