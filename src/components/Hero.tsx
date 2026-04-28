import { useI18n } from "../i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative pt-28 lg:pt-36 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-300/40 via-orange-200/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-amber-200/40 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 backdrop-blur px-3 py-1 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-neutral-700">{t("hero.badge")}</span>
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
              {t("hero.title.1")}
              <br />
              {t("hero.title.2")}
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 italic font-serif font-light">
                  {t("hero.title.3")}
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-400/60 -z-0" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-neutral-600 leading-relaxed">
              <strong className="text-neutral-900">{t("hero.since")} 1968</strong>,{" "}
              {t("hero.desc")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                {t("hero.cta.start")}
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-neutral-900 hover:bg-white"
              >
                {t("hero.cta.see")}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "1968", v: t("hero.stat.1") },
                { k: "1993", v: t("hero.stat.2") },
                { k: "+30", v: t("hero.stat.3") },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-2xl font-semibold tracking-tight">
                    {s.k}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1 leading-snug">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-[480px] mx-auto">
              <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-neutral-900 to-neutral-800 rotate-3 shadow-2xl" />
              <div className="absolute inset-0 rounded-[2rem] bg-white border border-neutral-200 shadow-xl overflow-hidden -rotate-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />

                <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#fb923c" />
                      <stop offset="1" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                  {Array.from({ length: 22 }).map((_, i) => (
                    <line key={i} x1="60" x2="340" y1={120 + i * 8} y2={120 + i * 8} stroke="#000" strokeOpacity={0.04}/>
                  ))}
                  <g transform="translate(200 200)" stroke="#0a0a0a" strokeWidth="1.2" fill="none">
                    <polygon points="0,-110 95,-55 95,55 0,110 -95,55 -95,-55" fill="url(#g1)" fillOpacity="0.9" />
                    <polygon points="0,-110 95,-55 0,0" fill="#fff7ed" stroke="#0a0a0a" />
                    <polygon points="0,-110 -95,-55 0,0" fill="#fed7aa" stroke="#0a0a0a" />
                    <polygon points="-95,-55 -95,55 0,0" fill="#fb923c" stroke="#0a0a0a" />
                    <polygon points="-95,55 0,110 0,0" fill="#ea580c" stroke="#0a0a0a" />
                    <polygon points="0,110 95,55 0,0" fill="#c2410c" stroke="#0a0a0a" />
                    <polygon points="95,55 95,-55 0,0" fill="#9a3412" stroke="#0a0a0a" />
                  </g>
                </svg>

                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 px-3 py-1.5 text-xs shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {t("hero.chip.printing")}
                </div>
                <div className="absolute bottom-5 right-5 rounded-2xl bg-neutral-900 text-white px-4 py-3 shadow-lg">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400">
                    {t("hero.chip.precision")}
                  </div>
                  <div className="text-lg font-semibold">±0.05 mm</div>
                </div>
                <div className="absolute bottom-5 left-5 rounded-2xl bg-white border border-neutral-200 px-4 py-3 shadow-sm">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">
                    {t("hero.chip.format")}
                  </div>
                  <div className="text-sm font-semibold">.STL · .STEP · .IGES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
