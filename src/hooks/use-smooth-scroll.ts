'use client';

import { useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';

export function useSmoothScroll(): (e: MouseEvent, href: string) => void {
  const router = useRouter();

  return (e: MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.split('#')[1];

    if (id) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
      router.push(href, { scroll: false });
    } else {
      router.push(href);
    }
  };
}
