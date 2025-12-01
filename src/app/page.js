import About from '@/components/About'; // Import kiya About component
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 pb-24 md:pb-0">
        {/* Mobile pe bottom navbar content na chupaye isliye 'pb-24' padding di hai */}

        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Skills />
        <Experience />
        <Projects /> */}

        {/* Footer bhi yahi add hoga baad me */}
      </div>
    </main>
  );
}
