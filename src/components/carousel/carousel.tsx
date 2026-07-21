'use client';

import classNames from 'classnames/bind';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import styles from './carousel.module.css';

const cx = classNames.bind(styles);

type CarouselProps = {
  children: ReactNode[];
  options?: EmblaOptionsType;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
};

export function Carousel({
  children,
  options = {},
  showDots = true,
  showArrows = true,
  className = '',
}: CarouselProps) {
  const [carouselRef, carouselApi] = useEmblaCarousel(options);
  const [prevButtonEnabled, setPrevButtonEnabled] = useState(
    () => carouselApi?.canScrollPrev() ?? false,
  );
  const [nextButtonEnabled, setNextButtonEnabled] = useState(
    () => carouselApi?.canScrollNext() ?? true,
  );
  const [, forceUpdate] = useState(0);

  const scrollPrev = useCallback(
    () => carouselApi?.scrollPrev(),
    [carouselApi],
  );
  const scrollNext = useCallback(
    () => carouselApi?.scrollNext(),
    [carouselApi],
  );

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const update = () => {
      setPrevButtonEnabled(carouselApi.canScrollPrev());
      setNextButtonEnabled(carouselApi.canScrollNext());
      forceUpdate((n) => n + 1);
    };

    carouselApi.on('init', update);
    carouselApi.on('select', update);
    carouselApi.on('reInit', update);

    return () => {
      carouselApi.off('init', update);
      carouselApi.off('select', update);
      carouselApi.off('reInit', update);
    };
  }, [carouselApi]);

  const snaps = carouselApi?.scrollSnapList() || [];
  const activeIndex = carouselApi?.selectedScrollSnap() || 0;

  const isReady = !!carouselApi;

  return (
    <div className={cx('slider', className)}>
      <div className={cx('slider-viewport')} ref={carouselRef}>
        <div className={cx('slider-container')}>
          {children.map((child, index) => (
            <div className={cx('slide')} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className={cx('prev-button')}
            onClick={scrollPrev}
            disabled={isReady && !prevButtonEnabled}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={cx('next-button')}
            onClick={scrollNext}
            disabled={isReady && !nextButtonEnabled}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {showDots && snaps.length > 0 && (
        <div className={cx('dots')}>
          {snaps.map((_, index) => (
            <button
              key={index}
              className={cx('dot', { active: index === activeIndex })}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${String(index + 1)}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
