import { useEffect, useState } from "react";
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
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] antialiased selection:bg-orange-500 selection:text-white transition-colors duration-300 mesh-gradient">
      <Header isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <main>
        <div className="reveal-on-scroll"><Hero /></div>
        <Marquee />
        <div className="reveal-on-scroll"><About /></div>
        <div className="reveal-on-scroll"><Stats /></div>
        <div className="reveal-on-scroll"><Services /></div>
        <div className="reveal-on-scroll"><Process /></div>
        <div className="reveal-on-scroll"><Sectors /></div>
        <div className="reveal-on-scroll"><Projects /></div>
        <div className="reveal-on-scroll"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
