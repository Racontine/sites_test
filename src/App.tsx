import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Sectors } from "./components/Sectors";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf7] text-neutral-900 antialiased selection:bg-orange-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Process />
        <Sectors />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
