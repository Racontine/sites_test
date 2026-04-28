import { useI18n } from "../i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative pt-28 lg:pt-36 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-20 -right-20 h-[600px] w-[600px] rounded-full bg-orange-500/10 dark:bg-orange-500/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-orange-600 dark:text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span>{t("hero.badge")}</span>
            </div>

            <h1 className="mt-8 text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[0.9] dark:text-white">
              {t("hero.title.1")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                {t("hero.title.2")}
              </span>
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 italic font-light">
                  {t("hero.title.3")}
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-orange-500/20 -z-0 rounded-full" />
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-neutral-900 dark:text-white font-semibold">{t("hero.since")} 1968</strong>,{" "}
              {t("hero.desc")}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-neutral-900 dark:bg-white px-8 py-4 text-sm font-bold text-white dark:text-neutral-900 hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-all shadow-xl shadow-orange-500/20"
              >
                {t("hero.cta.start")}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 dark:bg-neutral-900 text-white dark:text-white group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur px-8 py-4 text-sm font-bold text-neutral-900 dark:text-white hover:bg-white dark:hover:bg-white/10 transition-all"
              >
                {t("hero.cta.see")}
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg border-t border-neutral-200 dark:border-white/10 pt-10">
              {[
                { k: "1968", v: t("hero.stat.1") },
                { k: "1993", v: t("hero.stat.2") },
                { k: "+30", v: t("hero.stat.3") },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-3xl font-display font-bold tracking-tight dark:text-white">
                    {s.k}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-2 font-medium">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative perspective-1000">
            <div className="relative aspect-square max-w-[520px] mx-auto animate-float">
              {/* Main Card */}
              <div className="absolute inset-4 rounded-[3rem] bg-neutral-900/5 dark:bg-white/5 blur-2xl rotate-6" />
              <div className="absolute inset-0 rounded-[2.5rem] glass border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5" />

                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full animate-spin-slow opacity-20">
                   <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 8" />
                   <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="10 20" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center scale-110">
                  <svg viewBox="0 0 240 240" className="w-64 h-64 drop-shadow-2xl">
                    <defs>
                      <linearGradient id="poly-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#ff5c00" />
                        <stop offset="1" stopColor="#ff8c00" />
                      </linearGradient>
                    </defs>
                    <g transform="translate(120 120)" stroke="currentColor" strokeWidth="0.5" fill="none">
                      <polygon points="0,-100 86,-50 86,50 0,100 -86,50 -86,-50" fill="url(#poly-grad)" fillOpacity="0.8" />
                      <path d="M0 -100 L 0 100 M -86 -50 L 86 50 M -86 50 L 86 -50" strokeOpacity="0.3" />
                      <circle r="60" strokeDasharray="5 5" strokeOpacity="0.5" />
                    </g>
                  </svg>
                </div>

                {/* Floating Chips */}
                <div className="absolute top-8 left-8 glass rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 border border-white/20 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {t("hero.chip.printing")}
                </div>
                
                <div className="absolute bottom-8 right-8 glass rounded-2xl p-5 border border-white/20 dark:text-white">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                    {t("hero.chip.precision")}
                  </div>
                  <div className="text-xl font-display font-bold mt-1">±0.05 mm</div>
                </div>

                <div className="absolute bottom-8 left-8 glass rounded-2xl p-5 border border-white/20 dark:text-white">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                    Format
                  </div>
                  <div className="text-sm font-bold mt-1">STL · STEP · IGES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
