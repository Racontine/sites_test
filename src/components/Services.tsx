import { useI18n } from "../i18n";

export function Services() {
  const { t } = useI18n();
  const services = [
    { n: "01", title: t("services.1.t"), desc: t("services.1.d"), tags: ["Cahier", "CAO", "Plans"] },
    { n: "02", title: t("services.2.t"), desc: t("services.2.d"), tags: ["SLA", "SLS", "FDM", "Polyjet", "MJF"] },
    { n: "03", title: t("services.3.t"), desc: t("services.3.d"), tags: ["Pre-series", "Production"] },
    { n: "04", title: t("services.4.t"), desc: t("services.4.d"), tags: ["Paint", "Metal", "Dye"] },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
              <span className="h-px w-8 bg-orange-600 dark:bg-orange-400" />
              {t("services.kicker")}
            </div>
            <h2 className="mt-6 text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight dark:text-white">
              {t("services.title.1")}
              <br />
              <span className="text-neutral-400 font-light italic">{t("services.title.2")}</span>
            </h2>
          </div>
          <p className="lg:max-w-md text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative rounded-[2.5rem] border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 p-10 lg:p-12 hover:border-orange-500/50 transition-all hover:-translate-y-2 duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <span className="text-lg font-display font-bold text-orange-500/30 group-hover:text-orange-500 transition-colors">{s.n}</span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 dark:bg-white/10 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:rotate-45">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-3xl font-display font-bold tracking-tight dark:text-white">{s.title}</h3>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">{s.desc}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((tg) => (
                    <span
                      key={tg}
                      className="text-[10px] font-bold uppercase tracking-widest rounded-full bg-neutral-100 dark:bg-white/5 px-4 py-2 text-neutral-500 dark:text-neutral-400 group-hover:bg-orange-500/10 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
