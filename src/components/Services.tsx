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
    <section id="services" className="py-24 lg:py-32 bg-[#fafaf7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-8 bg-orange-600" />
              {t("services.kicker")}
            </div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              {t("services.title.1")}
              <br />
              <span className="italic font-serif font-light">{t("services.title.2")}</span>
            </h2>
          </div>
          <p className="lg:max-w-md text-neutral-600 leading-relaxed">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10 hover:border-neutral-900 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-neutral-400 tracking-widest">{s.n}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  →
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-neutral-600 leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((tg) => (
                  <span
                    key={tg}
                    className="text-[11px] uppercase tracking-wider rounded-full border border-neutral-200 px-2.5 py-1 text-neutral-600"
                  >
                    {tg}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
