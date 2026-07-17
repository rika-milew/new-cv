'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/hero/hero';

const Starfield = dynamic(() => import('@/components/star-field/star-field'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Starfield />
      <main>
        <Hero />
        {/* <Hero />
      <About />
      <Skills />
      <Education />
      <Contacts /> */}
      </main>
    </>
  );
}
