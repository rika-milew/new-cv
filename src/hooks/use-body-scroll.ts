'use client';

import { useEffect } from 'react';

export function useBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) {
      document.body.classList.remove('lock');
      document.documentElement.style.removeProperty('--scrollbar-width');
      return;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `${String(scrollbarWidth)}px`,
    );
    document.body.classList.add('lock');

    return (): void => {
      document.body.classList.remove('lock');
      document.documentElement.style.removeProperty('--scrollbar-width');
    };
  }, [isLocked]);
}
