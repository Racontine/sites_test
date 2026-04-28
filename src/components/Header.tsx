import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { LangToggle } from "./LangToggle";

export function Header() {
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
          ? "bg-[#fafaf7]/85 backdrop-blur-xl border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="relative h-9 w-9">
              <div className="absolute inset-0 rounded-lg bg-neutral-900" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                  <path d="M12 2 3 7l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-semibold tracking-tight">Polyrepro</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {t("nav.societe") === "Company" ? "Rapid prototyping" : "Prototypage rapide"}
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm text-neutral-700 hover:text-neutral-900 rounded-full hover:bg-neutral-900/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              {t("nav.cta")}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white text-xs group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white"
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
          <div className="md:hidden pb-4 flex flex-col gap-1 border-t border-neutral-200 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm rounded-lg hover:bg-neutral-900/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white"
            >
              {t("nav.cta")} →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
