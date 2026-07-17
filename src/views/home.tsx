import Hero from '@/components/sections/hero/hero';
import About from '@/components/sections/about/about';
import Skills from '@/components/sections/skills/skills';
import Portfolio from '@/components/sections/portfolio/portfolio';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        {/* <Hero />
      <About />
      <Skills />
      <Education />
      <Contacts /> */}
      </main>
    </>
  );
}
