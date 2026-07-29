'use client';

import { useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';

export function useSmoothScroll(): (e: MouseEvent, href: string) => void {
  const router = useRouter();

  const scrollTo: (e: MouseEvent, href: string) => void = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return scrollTo;
}
