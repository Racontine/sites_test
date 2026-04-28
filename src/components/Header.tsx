import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { LangToggle } from "./LangToggle";

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export function Header({ isDark, toggleDark }: HeaderProps) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#societe", label: t("nav.societe") },
    { href: "#services", label: t("nav.services") },
    { href: "#process", label: t("nav.process") },
    { href: "#projets", label: t("nav.projets") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9">
              <div className="absolute inset-0 rounded-lg bg-neutral-900 dark:bg-white" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white dark:text-neutral-900">
                  <path d="M12 2 3 7l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-tight dark:text-white">Polyrepro</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {t("nav.societe") === "Company" ? "Rapid prototyping" : "Prototypage rapide"}
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-orange-600 dark:hover:text-orange-400 rounded-full hover:bg-orange-500/5 transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-neutral-900/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <LangToggle />
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-lg shadow-orange-500/10"
            >
              {t("nav.cta")}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-xs group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleDark} className="p-2">
              {isDark ? <span className="text-yellow-400 text-xl">☼</span> : <span className="text-neutral-600 text-xl">☾</span>}
            </button>
            <LangToggle />
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1 border-t border-neutral-200 dark:border-white/10 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm rounded-lg hover:bg-neutral-900/5 dark:hover:bg-white/5 dark:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 dark:bg-white px-4 py-2.5 text-sm font-medium text-white dark:text-neutral-900"
            >
              {t("nav.cta")} →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
