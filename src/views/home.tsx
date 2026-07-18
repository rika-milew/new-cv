import Hero from '@/components/sections/hero/hero';
import About from '@/components/sections/about/about';
import Skills from '@/components/sections/skills/skills';
import Portfolio from '@/components/sections/portfolio/portfolio';
import Education from '@/components/sections/education/education';
import { Contacts } from '@/components/sections/contacts/contacts';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Education />
        <Contacts />
      </main>
    </>
  );
}
