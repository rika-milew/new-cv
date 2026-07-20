'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { useBodyScroll } from '@/hooks/use-body-scroll';
import { BREAKPOINTS, NAV_ITEMS } from '@/constants';
import styles from './header.module.css';

const cx = classNames.bind(styles);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useBodyScroll(isMenuOpen);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > BREAKPOINTS.MOBILE && isMenuOpen) {
        closeMenu();
      }
    };

    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target;

      if (
        isMenuOpen &&
        menuRef.current &&
        burgerRef.current &&
        target instanceof Node &&
        !menuRef.current.contains(target) &&
        !burgerRef.current.contains(target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header className={cx('header', { active: isMenuOpen })}>
      <div className={cx('global-container', styles.container)}>
        <Link href="/" className={cx('logo')}>
          &lt;Dev /&gt;
        </Link>

        <nav ref={menuRef} className={cx('menu', { active: isMenuOpen })}>
          <ul className={cx('list')}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cx('link')}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={burgerRef}
          className={cx('burger', { active: isMenuOpen })}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={cx('burger-line')}></span>
        </button>
      </div>
    </header>
  );
}
